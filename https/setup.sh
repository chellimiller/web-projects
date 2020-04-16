#!/bin/bash

yell() { echo "$0: $*" >&2; }
die() { yell "$*"; exit 111; }
try() { "$@" || die "cannot $*"; }

# Set Variables
SRC_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
CERT_DIR="$SRC_DIR/certificates"
CONF="$SRC_DIR/rootCA.csr.cnf"
EXT="$SRC_DIR/v3.ext"

ROOT_CA="rootCA"
ROOT_CA_KEY="$CERT_DIR/$ROOT_CA.key"
ROOT_CA_PEM="$CERT_DIR/$ROOT_CA.pem"

SERVER="server"
SERVER_CSR="$CERT_DIR/$SERVER.csr"
SERVER_KEY="$CERT_DIR/$SERVER.key"
SERVER_CRT="$CERT_DIR/$SERVER.crt"

echo "Source Directory: $SRC_DIR"
echo "Certificate Directory: $CERT_DIR"
echo "Configuration: $CONF"
echo "Ext: $EXT"
echo "Root CA Key: $ROOT_CA_KEY"
echo "Root CA Pem: $ROOT_CA_PEM"
echo "Server CSR: $SERVER_CSR"
echo "Server Key: $SERVER_KEY"
echo "Server Certificate: $SERVER_CRT"
read continue

# Create CERT_DIR Folder
mkdir -p "$CERT_DIR"

## Root CA
openssl genrsa -out "$ROOT_CA_KEY" 2048
openssl req -x509 -new -nodes -key "$ROOT_CA_KEY" -sha256 -days 3650 -out "$ROOT_CA_PEM" -config "$CONF"

## Server
openssl req -new -sha256 -nodes -out "$SERVER_CSR" -newkey rsa:2048 -keyout "$SERVER_KEY" -config "$CONF"
openssl x509 -req -in "$SERVER_CSR" -CA "$ROOT_CA_PEM" -CAkey "$ROOT_CA_KEY" -CAcreateserial -out "$SERVER_CRT" -days 3650 -sha256 -extfile "$EXT"
