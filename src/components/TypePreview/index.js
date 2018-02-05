import React from 'react';
import * as Icons from '../Icon/icons/types';
import { string, number, func } from 'prop-types';
import styled from 'styled-components';
import { ContainerQuery } from 'react-container-query';
import { query } from '../../config/breakpoints';
import { base, icon, text } from './style';
import cx from 'classnames';

const BaseStyle = styled.div`${base}`;
const IconStyle = styled.div`${icon}`;
const TextStyle = styled.div`${text}`;

function TypePreview({
  color,
  count,
  icon,
  id,
  label,
  navigateTo
}) {

  const Icon = Icons[`${icon}Icon`];

  return (
    <ContainerQuery query={query}>
      {
        params => (
          <BaseStyle
            color={color}
            onClick={() => navigateTo(`/type/${id}`)}
          >
            <IconStyle className={cx(params)}>
              <Icon />
            </IconStyle>
            <TextStyle>
              <strong>{count}</strong> {count === 1 ? label.singular : label.plural}
            </TextStyle>
          </BaseStyle>
        )
      }
    </ContainerQuery>
  );
}

TypePreview.propTypes = {
  color: string,
  count: number.isRequired,
  icon: string.isRequired,
  id: string,
  label: string.isRequired,
  navigateTo: func
};

export default TypePreview;
