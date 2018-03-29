import React from 'react';
import {
  string,
  func,
  number,
  shape
} from 'prop-types';
import * as sectionsIcons from '../Icon/icons/types';
import { ContainerQuery } from 'react-container-query';
import { query } from '../../config/breakpoints';
import styled from 'styled-components';
import {
  base,
  icon,
  title,
  main,
  sectionName
} from './style';

const BaseStyle = styled.div`${base}`;
const IconStyle = styled.div`${icon}`;
const TitleStyle = styled.h1`${title}`;
const MainStyle = styled.div`${main}`;
const SectionNameStyle = styled.span`${sectionName}`;

const SectionName = ({ topicAction, topicName }) => (
  <span>
    in <SectionNameStyle onClick={topicAction}>{topicName}</SectionNameStyle>
  </span>
);

const TypePageHeader = ({
  color,
  count,
  icon,
  topicName,
  topicAction,
  typeName,
  ...others
}) => {

  const Icon = sectionsIcons[`${icon}Icon`];

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
                  <Icon size={60} />
                </IconStyle>
              }
              <TitleStyle
                breakpointsStatus={params}
              >
                <span><strong>{count}</strong> {count === 1 ? typeName.singular : typeName.plural} {
                  topicName &&
                  <SectionName
                    topicAction={topicAction}
                    topicName={topicName}
                  />
                }</span>
              </TitleStyle>
            </MainStyle>
          </BaseStyle>
        )
      }
    </ContainerQuery>
  );
};

TypePageHeader.propTypes = {
  color: string.isRequired,
  count: number.isRequired,
  icon: string.isRequired,
  topicAction: func,
  topicName: string,
  typeName: shape({
    plural: string.isRequired,
    singular: string.isRequired
  }).isRequired
};

export default TypePageHeader;
