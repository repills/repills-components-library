import React from 'react';
import {
  string
} from 'prop-types';
import styled from 'styled-components';
import { MD } from '../../config/breakpoints';
import { SquareFilledPillIcon } from '../Icon/icons/basic';
import * as icons from '../Icon/icons/types';
import { MoreIcon } from '../Icon/icons/basic';
import { types } from 'repills-config';
import QueryHandler from '../QueryHandler';

import {
  base,
  pillsAnimation,
  pill,
  title,
  subTitle,
  description,
  typeBlock,
  typeList
} from './style';

const BaseStyle = styled.div`${base}`;
const PillsAnimationStyle = styled.div`${pillsAnimation}`;
const PillStyle = styled.div`${pill}`;
const TitleStyle = styled.h1`${title}`;
const SubTitleStyle = styled.div`${subTitle}`;
const DescriptionStyle = styled.p`${description}`;
const TypeListStyle = styled.div`${typeList}`;
const TypeBlockStyle = styled.div`${typeBlock}`;

const showedTypes = [
  types.article,
  types.tutorial,
  types.course,
  types.tool
];

const HomePageHeader = ({
  breakpointsStatus,
  description,
  subTitle,
  title,
  ...others
}) => {
  const typesList = breakpointsStatus[MD] ? showedTypes : showedTypes.slice(0,3);
  const iconSize =  breakpointsStatus[MD] ? 44 : 36;

  return (
    <BaseStyle
      breakpointsStatus={breakpointsStatus}
      {...others}
    >
      <div>
        <PillsAnimationStyle breakpointsStatus={breakpointsStatus}>
          {
            [1, 2, 3].map(i => (
              <PillStyle
                index={i}
                key={`pill-${i}`}
              >
                <SquareFilledPillIcon size={i === 2 ? 90 : 50} />
              </PillStyle>
            ))
          }
        </PillsAnimationStyle>
        <TitleStyle
          breakpointsStatus={breakpointsStatus}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {
          subTitle &&
          <SubTitleStyle>{subTitle}</SubTitleStyle>
        }

        <TypeListStyle breakpointsStatus={breakpointsStatus}>
          {
            typesList.map(type => {
              const Icon = icons[`${type.label.singular}Icon`];
              return (
                <TypeBlockStyle key={type.label.singular}>
                  <Icon size={iconSize} />
                  <span>{type.label.plural.toUpperCase()}</span>
                </TypeBlockStyle>
              );
            })
          }
          <TypeBlockStyle>
            <MoreIcon size={iconSize} />
            <span>and more</span>
          </TypeBlockStyle>
        </TypeListStyle>

        {
          description &&
          <DescriptionStyle>{description}</DescriptionStyle>
        }
      </div>
    </BaseStyle>);
};

HomePageHeader.propTypes = {
  description: string,
  subTitle: string,
  title: string,
};

HomePageHeader.defaultProps = {
  breakpointsStatus: {}
};

export default QueryHandler(HomePageHeader);
