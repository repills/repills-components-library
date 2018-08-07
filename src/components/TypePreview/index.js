import React from 'react';
import * as Icons from '../Icon/icons/types';
import {
  string,
  number,
  shape,
  func,
  bool
} from 'prop-types';
import styled from 'styled-components';
import {
  base,
  icon,
  text
} from './style';

const BaseStyle = styled.div`${base}`;
const IconStyle = styled.div`${icon}`;
const TextStyle = styled.div`${text}`;

function TypeSquarePreview({
  active,
  color,
  basePath,
  count,
  icon,
  id,
  label,
  navigateTo,
  ...others
}) {

  const Icon = Icons[`${icon}Icon`];

  return (
    <BaseStyle
      {...others}
      active={active}
      color={color}
      id={id}
      onClick={active ? null : () => navigateTo(basePath)}
    >
      <IconStyle
        active={active}
      >
        <Icon size={36} />
      </IconStyle>
      <TextStyle>
        {count && <span>{count}</span>} {count === 1 ? label.singular : label.plural}
      </TextStyle>
    </BaseStyle>
  );
}

TypeSquarePreview.propTypes = {
  active: bool,
  color: string,
  count: number.isRequired,
  icon: string.isRequired,
  id: string,
  label: shape({
    singular: string.isRequired,
    plural: string.isRequired
  }),
  navigateTo: func,
  path: string.isRequired
};

export default TypeSquarePreview;
