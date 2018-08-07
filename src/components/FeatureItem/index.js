import React from 'react';
import * as Icons from '../Icon/icons';
import {
  string,
  oneOf
} from 'prop-types';
import styled from 'styled-components';
import {
  base,
  icon,
  title,
  description
} from './style';

const BaseStyle = styled.div`${base}`;
const IconStyle = styled.div`${icon}`;
const TitleStyle = styled.h4`${title}`;
const DescriptionStyle = styled.p`${description}`;

const FeatureItem = ({
  description,
  icon,
  title,
  skin,
  ...others
}) => {
  const Icon = Icons[`${icon}Icon`];

  return (
    <BaseStyle
      {...others}
    >
      <IconStyle>
        <Icon size={44} />
      </IconStyle>
      <TitleStyle skin={skin}>{title}</TitleStyle>
      {
        description &&
        <DescriptionStyle
          dangerouslySetInnerHTML={{ __html: description }}
          skin={skin}
        />
      }
    </BaseStyle>
  );
};

FeatureItem.displayName = 'FeatureItem';

FeatureItem.propTypes = {
  description: string,
  icon: string,
  skin: oneOf(['light', 'dark']),
  title: string,
};

FeatureItem.defaultProps = {
  skin: 'light'
};

export default FeatureItem;
