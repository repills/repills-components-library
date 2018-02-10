import React from 'react';
import styled from 'styled-components';
import {
  string,
  number,
  func
} from 'prop-types';
import Button from '../Button';
import {
  base,
  name,
  abstract,
  icon
} from './style';

const BaseStyle = styled.article`${base}`;
const NameStyle = styled.h3`${name}`;
const AbstractStyle = styled.p`${abstract}`;
const IconStyle = styled.div`${icon}`;

function SectionPreview({
  abstract,
  icon,
  name,
  navigateTo,
  resourcesCount,
  topicsCount
}) {
  return (
    <BaseStyle>
      <NameStyle>{name}</NameStyle>
      <AbstractStyle>{abstract}</AbstractStyle>
      <Button
        label="Learn"
        onClick={navigateTo}
        outline
      />
    </BaseStyle>
  );
}

SectionPreview.propTypes = {
  abstract: string,
  icon: string.isRequired,
  name: string.isRequired,
  navigateTo: func.isRequired,
  resourcesCount: number,
  topicsCount: number
};

export default SectionPreview;
