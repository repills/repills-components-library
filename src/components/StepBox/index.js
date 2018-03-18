import React from 'react';
import {
  string,
  number,
  any
} from 'prop-types';
import { ContainerQuery } from 'react-container-query';
import { query } from '../../config/breakpoints';
import cx from 'classnames';
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
  last,
  title,
  ...others
}) => {

  return (
  <ContainerQuery query={query}>
      {
        params => (
          <BaseStyle
            {...others}
          >
            <div>
              <HeaderStyle>
                <IndexStyle>{index}</IndexStyle>
                <TitleStyle>{title}</TitleStyle>
              </HeaderStyle>
              <BodyStyle
                className={cx(params)}
                last={last}
              >
                {children}
              </BodyStyle>
            </div>
          </BaseStyle>
        )
      }
    </ContainerQuery>
  );
};

StepBox.propTypes = {
  children: any.isRequired,
  index: number.isRequired,
  title: string.isRequired
};

export default StepBox;

