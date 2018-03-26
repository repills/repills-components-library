import React from 'react';
import styled from 'styled-components';
import * as icons from '../Icon/icons/sections';
import {
  string,
  number,
  func,
  bool
} from 'prop-types';
import Button from '../Button';
import {
  base,
  name,
  cover,
  description,
  details,
  info,
  detail,
  icon
} from './style';

const BaseStyle = styled.article`${base}`;
const CoverStyle = styled.div`${cover}`;
const InfoStyle = styled.div`${info}`;
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
  topicsCount,
  disabled,
  ...others
}) {
  const Icon = icon && icons[icon];

  return (
    <BaseStyle
      {...others}
      disabled={disabled}
    >
      <CoverStyle
        disabled={disabled}
        onClick={!disabled && navigateTo}
      >
        <IconStyle>
          <Icon
            color={color}
            size={100}
          />
        </IconStyle>
        <NameStyle>{name}</NameStyle>
        {
          <DetailsStyle>
            {
              resourcesCount &&
              <DetailStyle>
                <strong>{resourcesCount}</strong> pill{resourcesCount === 1 ? '' : 's'}
              </DetailStyle>
            }
            {
              topicsCount &&
              <DetailStyle>
                <strong>{topicsCount}</strong> topic{topicsCount === 1 ? '' : 's'}
              </DetailStyle>
            }
          </DetailsStyle>
        }
      </CoverStyle>
      <InfoStyle>
        <DescriptionStyle>{description}</DescriptionStyle>
        <div>
          <Button
            disabled={disabled}
            label={disabled ? 'Coming soon' : 'Learn'}
            onClick={navigateTo}
          />
        </div>
      </InfoStyle>
    </BaseStyle>
  );
}

SectionPreview.propTypes = {
  color: string,
  description: string,
  disabled: bool,
  icon: string.isRequired,
  name: string.isRequired,
  navigateTo: func.isRequired,
  resourcesCount: number,
  topicsCount: number
};

export default SectionPreview;
