
import * as React from 'react'

export type CanvasProps = {
  height: number
  width: number
  className?: string
  style?: React.CSSProperties
}

const Canvas: React.FC<CanvasProps> = ({ height, width, className, style }) => (
  <canvas
    height={`${height}px`}
    width={`${width}px`}
    className={className}
    style={style}
  >
    Your browser does not support HTML Canvas.
  </canvas >
)

export default Canvas
