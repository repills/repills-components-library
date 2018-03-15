import React from 'react';
import * as Icons from '../Icon/icons';
import {
  string
} from 'prop-types';
import styled from 'styled-components';
import {
  base,
  icon,
  title,
  description
} from './style';

const BaseStyle = styled.div`${base}`;
const IconStyle = styled.div`${icon}`;
const TitleStyle = styled.h4`${title}`;
const DescriptionStyle = styled.p`${description}`;

const FeatureItem = ({
  description,
  icon,
  title
}) => {
  const Icon = Icons[`${icon}Icon`];

  return (
    <BaseStyle>
      <IconStyle>
        <Icon size={44} />
      </IconStyle>
      <TitleStyle>{title}</TitleStyle>
      {
        description &&
        <DescriptionStyle>{description}</DescriptionStyle>
      }
    </BaseStyle>
  );
};

FeatureItem.propTypes = {
  description: string,
  icon: string,
  title: string
};

FeatureItem.defaultProps = {
};

export default FeatureItem;
