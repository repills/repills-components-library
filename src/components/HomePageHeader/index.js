import React from 'react';
import {
  string
} from 'prop-types';
import styled from 'styled-components';
import { SquarePillIcon } from '../Icon/icons/basic';
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
  title
}) => {

  return (
    <BaseStyle>
      <PillsAnimationStyle>
        {
          [1,2,3].map(i => (
            <PillStyle
              index={i}
              key={`pill-${i}`}
            >
              <SquarePillIcon size={i === 2 ? 100 : 60} />
            </PillStyle>
          ))
        }
      </PillsAnimationStyle>
      <TitleStyle>{title}</TitleStyle>
      {
        subTitle &&
        <SubTitleStyle>{subTitle}</SubTitleStyle>
      }
      {
        description &&
        <DescriptionStyle>{description}</DescriptionStyle>
      }
    </BaseStyle>
  );
};

HomePageHeader.propTypes = {
  description: string,
  subTitle: string,
  title: string
};

export default HomePageHeader;
