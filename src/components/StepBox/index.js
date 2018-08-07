import React from 'react';
import {
  string,
  number,
  any,
  bool,
  object
} from 'prop-types';
import ConsumeContainerQuery from '../../hoc/consume-container-query';
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
  breakpointsStatus,
  children,
  index,
  last,
  title,
  ...others
}) => {

  return (
    <BaseStyle
      {...others}
    >
      <div>
        <HeaderStyle>
          <IndexStyle>{index}</IndexStyle>
          <TitleStyle>{title}</TitleStyle>
        </HeaderStyle>
        <BodyStyle
          breakpointsStatus={breakpointsStatus}
          last={last}
        >
          {children}
        </BodyStyle>
      </div>
    </BaseStyle>
  );
};

StepBox.displayName = 'StepBox';

StepBox.propTypes = {
  breakpointsStatus: object,
  children: any.isRequired,
  index: number.isRequired,
  last: bool,
  title: string.isRequired
};

StepBox.defaultProps = {
  breakpointsStatus: {}
};

export default ConsumeContainerQuery(StepBox);

