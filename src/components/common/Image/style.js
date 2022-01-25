import styled from 'styled-components'

export const Image = styled.img.attrs(({
  src = 'https://source.unsplash.com/random/1000x1000',
  loading = 'lazy',
  alt = '',
  srcset,
}) => ({
  loading,
  srcset,
  src,
  alt
}))`
  object-fit: ${(props) => props.objectFit || 'contain'};
  display: block;
  height: auto;
  width: 100%;
`;
