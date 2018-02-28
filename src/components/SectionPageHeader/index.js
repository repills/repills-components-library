import React from 'react';
import {
  string
} from 'prop-types';
import * as sectionsIcons from '../Icon/icons/sections';
import styled from 'styled-components';
import {
  base,
  icon,
  title,
  description
} from './style';

const BaseStyle = styled.div`${base}`;
const IconStyle = styled.div`${icon}`;
const TitleStyle = styled.h1`${title}`;
const DescriptionStyle = styled.p`${description}`;

const SectionPageHeader = ({
  color,
  description,
  icon,
  title
}) => {

  const Icon = sectionsIcons[icon];

  return (
    <BaseStyle>
      {
        Icon &&
        <IconStyle
          color={color}
        >
          <Icon size={120} />
        </IconStyle>
      }
      <TitleStyle>{title}</TitleStyle>
      {
        description &&
        <DescriptionStyle>{description}</DescriptionStyle>
      }
    </BaseStyle>
  );
};

SectionPageHeader.propTypes = {
  color: string.isRequired,
  description: string,
  icon: string.isRequired,
  title: string.isRequired
};

export default SectionPageHeader;
