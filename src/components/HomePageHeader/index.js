import React from 'react';
import {
  string,
  object
} from 'prop-types';
import styled from 'styled-components';
import { SM } from '../../config/breakpoints';
import * as icons from '../Icon/icons/types';
import Button from '../Button';
import { MoreIcon } from '../Icon/icons/basic';
import { types } from 'repills-config';
import QueryHandler from '../QueryHandler';

import {
  base,
  title,
  description,
  typeBlock,
  typeList,
  content,
  box
} from './style';

const BaseStyle = styled.div`${base}`;
const TitleStyle = styled.h1`${title}`;
const BoxStyle = styled.div`${box}`;
const DescriptionStyle = styled.p`${description}`;
const TypeListStyle = styled.div`${typeList}`;
const TypeBlockStyle = styled.div`${typeBlock}`;
const ContentStyle = styled.div`${content}`;

const showedTypes = [
  types.article,
  types.tutorial,
  types.course,
  types.tool,
  types.library,
  types.book,
  types.talk
];

const HomePageHeader = ({
  breakpointsStatus,
  description,
  primaryAction,
  secondaryAction,
  title,
  ...others
}) => {
  const iconSize =  breakpointsStatus[SM] ? 44 : 32;

  return (
    <BaseStyle
      breakpointsStatus={breakpointsStatus}
      {...others}
    >
      <ContentStyle>
        <BoxStyle breakpointsStatus={breakpointsStatus}>
          <TitleStyle
            breakpointsStatus={breakpointsStatus}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {
            description &&
            <DescriptionStyle>{description}</DescriptionStyle>
          }
          {
            primaryAction &&
            <Button
              label="Take a look our topics"
              skin="primary"
              style={{ marginTop: '2rem' }}
              {...primaryAction}
            />
          }
        </BoxStyle>
        <BoxStyle breakpointsStatus={breakpointsStatus}>
          <TypeListStyle breakpointsStatus={breakpointsStatus}>
            {
              showedTypes.map(type => {
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
            secondaryAction &&
            <Button
              size="S"
              skin="outline"
              style={{ marginTop: '2.5rem' }}
              {...secondaryAction}
            />
          }
        </BoxStyle>
      </ContentStyle>
    </BaseStyle>
  );
};

HomePageHeader.propTypes = {
  breakpointsStatus: object,
  description: string,
  primaryAction: Button.propTypes,
  secondaryAction: Button.propTypes,
  title: string,
};

HomePageHeader.defaultProps = {
  breakpointsStatus: {}
};

export default QueryHandler(HomePageHeader);
