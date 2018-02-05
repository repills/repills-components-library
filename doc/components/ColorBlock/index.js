import React from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';
import { base, color, hex, name, identifier, info } from './style';

const BaseStyle = styled.div`${base}`;
const ColorStyle = styled.div`${color}`;
const HexStyle = styled.div`${hex}`;
const NameStyle = styled.div`${name}`;
const IdentifierStyle = styled.div`${identifier}`;
const InfoStyle = styled.div`${info}`;

const ColorBlock = ({
  color
}) => {
  return (
    <BaseStyle>
      <ColorStyle style={{ backgroundColor: color.value }} />
      <InfoStyle>
        <NameStyle>{color.name}</NameStyle>
        <IdentifierStyle>Key: <strong>{color.id}</strong></IdentifierStyle>
        <HexStyle>Hex: <strong>{color.value}</strong></HexStyle>
      </InfoStyle>
    </BaseStyle>
  );
};

ColorBlock.propTypes = {
  color: object.isRequired
};

export default ColorBlock;
