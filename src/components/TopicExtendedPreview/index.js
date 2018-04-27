import React from 'react';
import styled from 'styled-components';
import CompositionBar from '../CompositionBar';
import * as icons from '../Icon/icons/sections';
import {
  string,
  arrayOf,
  object,
  func,
  number,
  shape
} from 'prop-types';
import Button from '../Button';
import {
  base,
  total,
  title,
  cover,
  icon,
  body,
  footer,
  description
} from './style';

const BaseStyle = styled.article`${base}`;
const CoverStyle = styled.div`${cover}`;
const BodyStyle = styled.div`${body}`;
const TotalStyle = styled.div`${total}`;
const TitleStyle = styled.h4`${title}`;
const IconStyle = styled.div`${icon}`;
const DescriptionStyle = styled.p`${description}`;
const FooterStyle = styled.div`${footer}`;

function TopicExtendedPreview({
  navigateTo,
  path,
  resources,
  title,
  sectionIcon,
  description,
  stats,
  ...others
}) {
  const totalCount = resources.length;
  const SectionIcon = sectionIcon && icons[sectionIcon];
  return (
    <BaseStyle
      {...others}
      disabled={totalCount === 0}
    >
      <CoverStyle
        onClick={totalCount !== 0 ? navigateTo : undefined}
      >
        <TitleStyle>{title}</TitleStyle>
        <IconStyle>
          <SectionIcon
            size={36}
          />
        </IconStyle>
      </CoverStyle>
      <CompositionBar
        barHeight={4}
        stats={stats}
      />
      <BodyStyle>
        <DescriptionStyle>
          {description}
        </DescriptionStyle>
        <FooterStyle>
          <TotalStyle>
            <strong>{totalCount}</strong> pill{totalCount === 1 ? '' : 's'}
          </TotalStyle>
          <Button
            ellipsis
            href={path ? path : undefined}
            label="Open topic"
            onClick={totalCount !== 0 ? navigateTo : undefined}
            size="S"
            skin="outline"
          />
        </FooterStyle>
      </BodyStyle>
    </BaseStyle>
  );
}

TopicExtendedPreview.propTypes = {
  navigateTo: func,
  resources: arrayOf(object).isRequired,
  stats: arrayOf(shape({
    type: string.isRequired,
    label: string.isRequired,
    color: string.isRequired,
    count: number.isRequired,
    percentage: number.isRequired
  })),
  title: string.isRequired,
};

export default TopicExtendedPreview;
