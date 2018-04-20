import React from 'react';
import {
  string,
  object
} from 'prop-types';
import styled from 'styled-components';
import { MD } from '../../config/breakpoints';
import * as icons from '../Icon/icons/types';
import { MoreIcon } from '../Icon/icons/basic';
import { types } from 'repills-config';
import QueryHandler from '../QueryHandler';
import Logo from '../Logo';
import theme from '../../config/theme';
const { basic, neutral } = theme.palettes;

import {
  base,
  title,
  subTitle,
  description,
  typeBlock,
  typeList,
  logo
} from './style';

const BaseStyle = styled.div`${base}`;
const TitleStyle = styled.h1`${title}`;
const SubTitleStyle = styled.div`${subTitle}`;
const DescriptionStyle = styled.p`${description}`;
const TypeListStyle = styled.div`${typeList}`;
const TypeBlockStyle = styled.div`${typeBlock}`;
const LogoStyle = styled.div`${logo}`;

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
        <LogoStyle breakpointsStatus={breakpointsStatus} >
          <Logo
            color={basic.primaryHighest}
            secondaryColor={neutral.medium}
          />
        </LogoStyle>
        <TitleStyle
          breakpointsStatus={breakpointsStatus}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {
          subTitle &&
          <SubTitleStyle>{subTitle}</SubTitleStyle>
        }
        {
          description &&
          <DescriptionStyle>{description}</DescriptionStyle>
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
      </div>
    </BaseStyle>
  );
};

HomePageHeader.propTypes = {
  breakpointsStatus: object,
  description: string,
  subTitle: string,
  title: string,
};

HomePageHeader.defaultProps = {
  breakpointsStatus: {}
};

export default QueryHandler(HomePageHeader);
