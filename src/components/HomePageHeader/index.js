import React from 'react';
import {
  string
} from 'prop-types';
import styled from 'styled-components';
import { ContainerQuery } from 'react-container-query';
import { query, MD } from '../../config/breakpoints';
import { SquareFilledPillIcon } from '../Icon/icons/basic';
import Spinner from '../Spinner';
import * as icons from '../Icon/icons/types';
import { MoreIcon } from '../Icon/icons/basic';
import { types } from 'repills-config';

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
  description,
  subTitle,
  title,
  ...others
}) => {

  return (
    <ContainerQuery query={query}>
      {
        params => {
          const loading = Object.keys(params).length === 0;
          const typesList = params[MD] ? showedTypes : showedTypes.slice(0,3);
          const iconSize =  params[MD] ? 48 : 40;

          return (
            <BaseStyle
              breakpointsStatus={params}
              {...others}
            >
              { loading && <Spinner position="absolute" /> }
              <div>
                <PillsAnimationStyle breakpointsStatus={params}>
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
                  breakpointsStatus={params}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                {
                  subTitle &&
                  <SubTitleStyle>{subTitle}</SubTitleStyle>
                }

                <TypeListStyle breakpointsStatus={params}>
                  {
                    typesList.map(type => {
                      const Icon = icons[`${type.label.singular}Icon`];
                      return (
                        <TypeBlockStyle>
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
            </BaseStyle>
          );
        }
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
