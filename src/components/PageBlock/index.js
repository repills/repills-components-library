import React from 'react';
import {
  string,
  any,
  number,
  bool,
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
const DescriptionStyle = styled.div`${description}`;
const BodyStyle = styled.div`${body}`;
const ContentsCountStyle = styled.div`${count}`;

const PageBlock = ({
  title,
  children,
  contentsCount,
  align,
  simple,
  description,
  ...others
}) => {

  return (
    <BaseStyle
      {...others}
    >
      <TitleStyle
        align={align}
        count={contentsCount}
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
        >
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </DescriptionStyle>
      }
      <BodyStyle
        simple={simple}
      >
        {children}
      </BodyStyle>
    </BaseStyle>
  );
};

PageBlock.propTypes = {
  align: oneOf(['LEFT', 'CENTER']),
  children: any,
  contentsCount: number,
  description: string,
  simple: bool,
  title: string
};

PageBlock.defaultProps = {
  align: 'LEFT'
};

export default PageBlock;
