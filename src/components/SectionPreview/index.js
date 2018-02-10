import React from 'react';
import styled from 'styled-components';
import * as icons from '../Icon/icons/sections';
import {
  string,
  number,
  func
} from 'prop-types';
import Button from '../Button';
import {
  base,
  name,
  description,
  details,
  detail,
  icon
} from './style';

const BaseStyle = styled.article`${base}`;
const NameStyle = styled.h3`${name}`;
const DescriptionStyle = styled.p`${description}`;
const IconStyle = styled.div`${icon}`;
const DetailsStyle = styled.div`${details}`;
const DetailStyle = styled.span`${detail}`;

function SectionPreview({
  color,
  description,
  icon,
  name,
  navigateTo,
  resourcesCount,
  topicsCount
}) {
  const Icon = icon && icons[icon];

  return (
    <BaseStyle>
      <IconStyle>
        <Icon
          color={color}
          size={100}
        />
      </IconStyle>
      <NameStyle>{name}</NameStyle>
      <DescriptionStyle>{description}</DescriptionStyle>

      <DetailsStyle>
        <DetailStyle>
          <strong>{resourcesCount}</strong> pill{resourcesCount === 1 ? '' : 's'}
        </DetailStyle>
        /
        <DetailStyle>
          <strong>{topicsCount}</strong> topic{topicsCount === 1 ? '' : 's'}
        </DetailStyle>
      </DetailsStyle>

      <div>
        <Button
          label="Learn"
          onClick={navigateTo}
          outline
        />
      </div>
    </BaseStyle>
  );
}

SectionPreview.propTypes = {
  color: string,
  description: string,
  icon: string.isRequired,
  name: string.isRequired,
  navigateTo: func.isRequired,
  resourcesCount: number,
  topicsCount: number
};

export default SectionPreview;
