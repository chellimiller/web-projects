# HTTPS Dev Environment Setup

Tested on a Linux VM embedded in Chrome OS.

#. Run the setup script, you may need to update the permissions with `chmod +x https/setup.sh`.
#. Open [Chrome Certificate Settings](chrome://settings/certificates).
#. Import `https/certificates/rootCA.pem` as a Certificate Authority.
#. Start app, it should now be secure.
