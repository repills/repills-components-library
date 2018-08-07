import React from 'react';
import {
  string,
  object
} from 'prop-types';
import * as sectionsIcons from '../Icon/icons/sections';
import ConsumeContainerQuery from '../../hoc/consume-container-query';

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
  breakpointsStatus,
  color,
  description,
  icon,
  label,
  title,
  ...others
}) => {

  const Icon = sectionsIcons[icon];

  return (
    <BaseStyle
      {...others}
      breakpointsStatus={breakpointsStatus}
    >
      <div>
        <MainStyle
          breakpointsStatus={breakpointsStatus}
        >
          {
            Icon &&
            <IconStyle
              breakpointsStatus={breakpointsStatus}
              color={color}
            >
              <Icon size={56} />
            </IconStyle>
          }
          {
            label &&
            <LabelStyle>{label}</LabelStyle>
          }
          <TitleStyle
            breakpointsStatus={breakpointsStatus}
          >
            {title}
          </TitleStyle>
        </MainStyle>
        {
          description &&
          <DescriptionStyle
            breakpointsStatus={breakpointsStatus}
            icon={icon}
          >
            {description}
          </DescriptionStyle>
        }
      </div>
    </BaseStyle>
  );
};

SectionPageHeader.displayName = 'SectionPageHeader';

SectionPageHeader.propTypes = {
  breakpointsStatus: object,
  color: string.isRequired,
  description: string,
  icon: string.isRequired,
  label: string,
  title: string.isRequired
};

SectionPageHeader.defaultProps = {
  breakpointsStatus: {}
};

export default ConsumeContainerQuery(SectionPageHeader);
