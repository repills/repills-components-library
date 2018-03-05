import React from 'react';
import * as Icons from '../Icon/icons/types';
import {
  string,
  number,
  shape,
  func
} from 'prop-types';
import styled from 'styled-components';
import { base, icon, text } from './style';

const BaseStyle = styled.div`${base}`;
const IconStyle = styled.div`${icon}`;
const TextStyle = styled.div`${text}`;

function TypePreview({
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
      color={color}
      id={id}
      onClick={() => navigateTo(path)}
    >
      <IconStyle>
        <Icon size={48} />
      </IconStyle>
      <TextStyle>
        <strong>{count}</strong> {count === 1 ? label.singular : label.plural}
      </TextStyle>
    </BaseStyle>
  );
}

TypePreview.propTypes = {
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
