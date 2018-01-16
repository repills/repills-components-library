import React from 'react';
import * as Icons from '../Icon/icons/types';
import { string, number } from 'prop-types';
import styled from 'styled-components';
import { base, icon, text } from './style';

const BaseStyle = styled.div`${base}`;
const IconStyle = styled.div`${icon}`;
const TextStyle = styled.div`${text}`;

function TypePreview({ color, label, count, icon }) {

  const Icon = Icons[`${icon}Icon`];

  return (
    <BaseStyle color={color}>
      <IconStyle>
        <Icon />
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
  label: string.isRequired
};

export default TypePreview;
