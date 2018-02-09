import React from 'react';
import styled from 'styled-components';
import {
  string,
  arrayOf,
  object,
  func
} from 'prop-types';
import { base, frame, counter, total, totalLabel, info, title, composition } from './style';

const BaseStyle = styled.article`${base}`;

function SectionPreview({
  path,
  navigateTo,
  resources,
  title
}) {
  return (
    <BaseStyle>Section Preview</BaseStyle>
  );
}

SectionPreview.propTypes = {
  navigateTo: func,
  path: string,
  resources: arrayOf(object).isRequired,
  title: string.isRequired
};

export default SectionPreview;
