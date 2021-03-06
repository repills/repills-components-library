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
const InfoStyle = styled.div`${info}`;
const NameStyle = styled.h3`${name}`;
const DescriptionStyle = styled.p`${description}`;
const IconStyle = styled.div`${icon}`;
const DetailsStyle = styled.div`${details}`;
const DetailStyle = styled.span`${detail}`;

class SectionPreview extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.name !== nextProps.name;
  }

  navigate = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.navigateTo();
  };

  render() {
    const {
      color,
      description,
      icon,
      name,
      path,
      navigateTo,
      resourcesCount,
      topicsCount,
      disabled,
      ...others
    } = this.props;

    const Icon = icon && icons[icon];
    const CoverStyle = styled[!disabled && navigateTo ? 'a' : 'div']`${cover}`;

    return (
      <BaseStyle
        {...others}
        disabled={disabled}
      >
        <CoverStyle
          disabled={disabled}
          onClick={!disabled ? this.navigate : undefined}
        >
          <IconStyle>
            <Icon
              color={color}
              size={88}
            />
          </IconStyle>
          <NameStyle>{name}</NameStyle>
        </CoverStyle>
        <InfoStyle>
          <DescriptionStyle>{description}</DescriptionStyle>
          {
            <DetailsStyle>
              {
                resourcesCount !== 'undefined' &&
                <DetailStyle>
                  <strong>{resourcesCount}</strong> pill{resourcesCount === 1 ? '' : 's'}
                </DetailStyle>
              }
              {
                topicsCount !== 'undefined' &&
                <DetailStyle>
                  <strong>{topicsCount}</strong> topic{topicsCount === 1 ? '' : 's'}
                </DetailStyle>
              }
            </DetailsStyle>
          }
          <div style={{ lineHeight: 0 }}>
            <Button
              disabled={disabled}
              ellipsis
              expanded
              href={!disabled ? path : undefined}
              label={disabled ? 'Coming soon' : 'Learn'}
              onClick={navigateTo}
              skin="outlineTertiary"
            />
          </div>
        </InfoStyle>
      </BaseStyle>
    );
  }
}

SectionPreview.displayName = 'SectionPreview';

SectionPreview.propTypes = {
  color: string,
  description: string,
  disabled: bool,
  icon: string.isRequired,
  name: string.isRequired,
  navigateTo: func,
  path: string.isRequired,
  resourcesCount: number,
  topicsCount: number
};

export default SectionPreview;
