import styled, { css } from 'styled-components';

import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }

    ${Title} {
      margin-botton: ${theme.spacings.xlarge};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  width: 100%;
`;
