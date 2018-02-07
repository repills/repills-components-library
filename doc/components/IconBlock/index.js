import React from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';
import * as Icons from '../../../src/components';
import { base, preview, name, identifier, info } from './style';

const BaseStyle = styled.div`${base}`;
const PreviewStyle = styled.div`${preview}`;
const InfoStyle = styled.div`${info}`;
const NameStyle = styled.h4`${name}`;
const IdentifierStyle = styled.div`${identifier}`;

const IconBlock = ({
  config,
  settings
}) => {
  const name = config.name;
  const id = config.id;
  const componentId = `${id}Icon`;
  const Component = Icons[componentId];
  return (
    <BaseStyle>
      <PreviewStyle>
        <Component
          {...settings}
        />
      </PreviewStyle>
      <InfoStyle>
        <NameStyle>{name}</NameStyle>
        <IdentifierStyle>{componentId}</IdentifierStyle>
      </InfoStyle>
    </BaseStyle>
  );
};

// @TODO: improve proptypes
IconBlock.propTypes = {
  config: object.isRequired,
  settings: object.isRequired,
};

export default IconBlock;
