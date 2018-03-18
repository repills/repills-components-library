import React from 'react';
import {
  string
} from 'prop-types';
import styled from 'styled-components';
import { ContainerQuery } from 'react-container-query';
import { query } from '../../config/breakpoints';
import { SquareFilledPillIcon } from '../Icon/icons/basic';
import {
  base,
  pillsAnimation,
  pill,
  title,
  subTitle,
  description
} from './style';

const BaseStyle = styled.div`${base}`;
const PillsAnimationStyle = styled.div`${pillsAnimation}`;
const PillStyle = styled.div`${pill}`;
const TitleStyle = styled.h1`${title}`;
const SubTitleStyle = styled.div`${subTitle}`;
const DescriptionStyle = styled.p`${description}`;

const HomePageHeader = ({
  description,
  subTitle,
  title,
  ...others
}) => {

  return (
    <ContainerQuery query={query}>
      {
        params => (
          <BaseStyle
            {...others}
          >
            <PillsAnimationStyle>
              {
                [1, 2, 3].map(i => (
                  <PillStyle
                    index={i}
                    key={`pill-${i}`}
                  >
                    <SquareFilledPillIcon size={i === 2 ? 100 : 60} />
                  </PillStyle>
                ))
              }
            </PillsAnimationStyle>
            <TitleStyle breakpointsStatus={params}>{title}</TitleStyle>
            {
              subTitle &&
              <SubTitleStyle>{subTitle}</SubTitleStyle>
            }
            {
              description &&
              <DescriptionStyle>{description}</DescriptionStyle>
            }
          </BaseStyle>
        )
      }
    </ContainerQuery>
  );
};

HomePageHeader.propTypes = {
  description: string,
  subTitle: string,
  title: string
};

export default HomePageHeader;
