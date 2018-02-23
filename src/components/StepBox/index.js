import React from 'react';
import {
  string,
  number,
  element
} from 'prop-types';
import styled from 'styled-components';
import {
  base,
  header,
  title,
  index,
  body
} from './style';

const BaseStyle = styled.div`${base}`;
const HeaderStyle = styled.div`${header}`;
const IndexStyle = styled.div`${index}`;
const TitleStyle = styled.h3`${title}`;
const BodyStyle = styled.div`${body}`;

const StepBox = ({
  children,
  index,
  title
}) => {

  return (
    <BaseStyle>
      <HeaderStyle>
        <IndexStyle>{index}</IndexStyle>
        <TitleStyle>{title}</TitleStyle>
      </HeaderStyle>
      <BodyStyle>
        {children}
      </BodyStyle>
    </BaseStyle>
  );
};

StepBox.propTypes = {
  children: element,
  index: number,
  title: string
};

export default StepBox;

