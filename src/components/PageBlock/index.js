import React from 'react';
import {
  string,
  element,
  number,
  oneOf
} from 'prop-types';
import styled from 'styled-components';
import {
  base,
  count,
  title,
  description,
  body
} from './style';

const BaseStyle = styled.div`${base}`;
const TitleStyle = styled.h2`${title}`;
const DescriptionStyle = styled.p`${description}`;
const BodyStyle = styled.div`${body}`;
const ContentsCountStyle = styled.div`${count}`;

const PageBlock = ({
  title,
  children,
  contentsCount,
  align,
  description,
  ...others
}) => {

  return (
    <BaseStyle
      {...others}
    >
      <TitleStyle
        align={align}
      >
        <span>{title}</span>
        {
          contentsCount &&
          <ContentsCountStyle>{contentsCount}</ContentsCountStyle>
        }
      </TitleStyle>
      {
        description &&
        <DescriptionStyle
          align={align}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      }
      <BodyStyle>
        {children}
      </BodyStyle>
    </BaseStyle>
  );
};

PageBlock.propTypes = {
  align: oneOf(['LEFT', 'RIGHT', 'CENTER']),
  children: element,
  contentsCount: number,
  description: string,
  title: string
};

PageBlock.defaultProps = {
  align: 'LEFT'
}

export default PageBlock;
