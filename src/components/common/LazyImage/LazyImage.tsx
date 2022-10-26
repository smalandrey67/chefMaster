import { FC } from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { LazyImageProps } from './LazyImage.types'

export const LazyImage: FC<LazyImageProps> = ({ image, alt, width, height, style }) => {
  return <LazyLoadImage src={image} alt={alt} width={width} height={height} effect='blur' style={style} />
}
