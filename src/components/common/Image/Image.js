// External libraries
import { useState } from 'react'
import PropTypes from 'prop-types'

// Constants
import { PlaceholderImage } from 'utils/constants'

// Local components
import { Image as BaseImage } from './style'

export const Image = ({
  src = PlaceholderImage,
  loading = 'lazy',
  alt = '',
  srcset,
}) => {
  const [localSrc, setLocalSrc] = useState(src)

  return (
    <BaseImage
      onError={() => setLocalSrc(PlaceholderImage)}
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
  alt: PropTypes.string,
  srcset: PropTypes.string
}