import React from 'react';
import {
  string,
  func,
  number,
  shape,
  object
} from 'prop-types';
import * as sectionsIcons from '../Icon/icons/types';
import ConsumeContainerQuery from '../../hoc/consume-container-query';

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
const SectionNameStyle = styled.strong`${sectionName}`;

const SectionName = ({ topicAction, topicName }) => (
  <span>
    in <SectionNameStyle onClick={topicAction}>{topicName}</SectionNameStyle>
  </span>
);

const TypePageHeader = ({
  breakpointsStatus,
  color,
  count,
  icon,
  topicAction,
  topicName,
  typeName,
  ...others
}) => {

  const Icon = sectionsIcons[`${icon}Icon`];

  return (
    <BaseStyle
      {...others}
      breakpointsStatus={breakpointsStatus}
    >
      <MainStyle
        breakpointsStatus={breakpointsStatus}
      >
        {
          Icon &&
          <IconStyle
            breakpointsStatus={breakpointsStatus}
            color={color}
          >
            <Icon size={44} />
          </IconStyle>
        }
        <TitleStyle
          breakpointsStatus={breakpointsStatus}
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
  );
};

TypePageHeader.propTypes = {
  breakpointsStatus: object,
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

TypePageHeader.defaultProps = {
  breakpointsStatus: {}
};

export default ConsumeContainerQuery(TypePageHeader);
