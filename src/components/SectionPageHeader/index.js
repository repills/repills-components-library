import React from 'react';
import {
  string
} from 'prop-types';
import * as sectionsIcons from '../Icon/icons/sections';
import { ContainerQuery } from 'react-container-query';
import { SM, query } from '../../config/breakpoints';
import styled from 'styled-components';
import {
  base,
  icon,
  label,
  title,
  main,
  description
} from './style';

const BaseStyle = styled.div`${base}`;
const LabelStyle = styled.div`${label}`;
const IconStyle = styled.div`${icon}`;
const TitleStyle = styled.h1`${title}`;
const MainStyle = styled.div`${main}`;
const DescriptionStyle = styled.p`${description}`;

const SectionPageHeader = ({
  color,
  description,
  icon,
  label,
  title,
  ...others
}) => {

  const Icon = sectionsIcons[icon];

  return (
    <ContainerQuery query={query}>
      {
        params => (
          <BaseStyle
            {...others}
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
                  <Icon size={90} />
                </IconStyle>
              }
              {
                label &&
                <LabelStyle>{label}</LabelStyle>
              }
              <TitleStyle
                breakpointsStatus={params}
              >
                {title}
              </TitleStyle>
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
  label: string,
  title: string.isRequired
};

export default SectionPageHeader;
