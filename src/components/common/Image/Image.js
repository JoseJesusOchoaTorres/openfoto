// External libraries
import { useState } from 'react'
import PropTypes from 'prop-types'

// Constants
import { PlaceholderImage } from 'utils/constants'

// Local components
import { BaseImage } from './style'

export const Image = ({
  src = PlaceholderImage,
  loading = 'lazy',
  objectFit = 'contain',
  alt = '',
  srcset,
}) => {
  const [localSrc, setLocalSrc] = useState(src)

  return (
    <BaseImage
      onError={() => setLocalSrc(PlaceholderImage)}
      objectFit={objectFit}
      loading={loading}
      srcSet={srcset}
      src={localSrc}
      alt={alt}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string,
  loading: PropTypes.string,
  objectFit: PropTypes.string,
  alt: PropTypes.string,
  srcset: PropTypes.string
}