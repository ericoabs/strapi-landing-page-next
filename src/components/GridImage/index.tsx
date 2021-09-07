import * as Styled from './styles';

import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';

export type GridImageElementProps = {
  altText: string;
  srcImg: string;
};

export type GridImageProps = {
  title: string;
  description: string;
  background?: boolean;
  grid?: GridImageElementProps[];
  sectionId?: string;
};

export const GridImage = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}: GridImageProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((element) => (
            <Styled.GridElement key={`${element.srcImg}${element.altText}`}>
              <Styled.Image src={element.srcImg} alt={element.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
