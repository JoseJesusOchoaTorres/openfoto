import styled from 'styled-components'

export const BaseImage = styled.img.attrs(({
  src = 'https://source.unsplash.com/random/1000x1000',
  loading = 'lazy',
  objectFit,
  alt = '',
  srcset,
}) => ({
  loading,
  srcset,
  objectFit,
  src,
  alt
}))`
  object-fit: ${(props) => props.objectFit};
  display: block;
  height: auto;
  width: 100%;
`;
