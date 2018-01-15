import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { base } from './style';

const BaseStyle = styled.div`${base}`;

function Icon({ name }) {
  return (
    <BaseStyle>
      <svg viewBox='0 0 100 100'>
        <use xlinkHref={`images/sprite.svg#icons_${name}`} />
      </svg>
    </BaseStyle>
  );
}

Icon.propTypes = {
  name: string.isRequired
};

export default Icon;

