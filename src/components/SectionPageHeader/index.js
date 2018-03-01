import React from 'react';
import {
  string
} from 'prop-types';
import * as sectionsIcons from '../Icon/icons/sections';
import { ContainerQuery } from 'react-container-query';
import { getCurrentBreakpoint } from '../../utils';
import { MD, query } from '../../config/breakpoints';
import styled from 'styled-components';
import {
  base,
  icon,
  label,
  title,
  titleContainer,
  main,
  description
} from './style';

const BaseStyle = styled.div`${base}`;
const LabelStyle = styled.div`${label}`;
const IconStyle = styled.div`${icon}`;
const TitleStyle = styled.h1`${title}`;
const MainStyle = styled.div`${main}`;
const TitleContainerStyle = styled.div`${titleContainer}`;
const DescriptionStyle = styled.p`${description}`;

const SectionPageHeader = ({
  color,
  description,
  icon,
  title
}) => {

  const Icon = sectionsIcons[icon];

  return (
    <ContainerQuery query={query}>
      {
        params => (
          <BaseStyle
            breakpointsStatus={params}
          >
            <MainStyle
              breakpointsStatus={params}
            >
              {
                Icon &&
                <IconStyle
                  breakpointsStatus={params}
                  color={color}
                >
                  <Icon size={params[MD] ? 80 : 100} />
                </IconStyle>
              }
              <LabelStyle>Section</LabelStyle>
              <TitleStyle>{title}</TitleStyle>
            </MainStyle>
            {
              description &&
              <DescriptionStyle icon={icon}>{description}</DescriptionStyle>
            }
          </BaseStyle>
        )
      }
    </ContainerQuery>
  );
};

SectionPageHeader.propTypes = {
  color: string.isRequired,
  description: string,
  icon: string.isRequired,
  title: string.isRequired
};

export default SectionPageHeader;
