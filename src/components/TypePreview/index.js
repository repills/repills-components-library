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
  text,
  count
} from './style';

const BaseStyle = styled.div`${base}`;
const IconStyle = styled.div`${icon}`;
const TextStyle = styled.div`${text}`;
const CountStyle = styled.div`${count}`;

function TypePreview({
  active,
  color,
  path,
  count,
  icon,
  id,
  label,
  navigateTo
}) {

  const Icon = Icons[`${icon}Icon`];

  return (
    <BaseStyle
      active={active}
      color={color}
      id={id}
      onClick={active ? null : () => navigateTo(path)}
    >
      <IconStyle
        active={active}
      >
        <Icon size={28} />
      </IconStyle>
      <TextStyle>
        {count === 1 ? label.singular : label.plural}
      </TextStyle>
      <CountStyle
        active={active}
      >
        {count}
      </CountStyle>
    </BaseStyle>
  );
}

TypePreview.propTypes = {
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

export default TypePreview;
