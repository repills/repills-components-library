import React from 'react';
import * as Icons from '../Icon/icons';
import {
  string
} from 'prop-types';
import styled from 'styled-components';
import {
  base,
  icon,
  title,
  action,
  description
} from './style';
import Button from '../Button';

const BaseStyle = styled.div`${base}`;
const ActionStyle = styled.div`${action}`;
const IconStyle = styled.div`${icon}`;
const TitleStyle = styled.h4`${title}`;
const DescriptionStyle = styled.p`${description}`;

const TileCta = ({
  description,
  icon,
  title,
  cta,
  ...others
}) => {
  const Icon = Icons[`${icon}Icon`];

  return (
    <BaseStyle
      {...others}
    >
      <IconStyle>
        <Icon size={60} />
      </IconStyle>
      <TitleStyle>{title}</TitleStyle>
      {
        description &&
        <DescriptionStyle dangerouslySetInnerHTML={{ __html: description }} />
      }
      {
        cta &&
        <ActionStyle>
          <Button
            autoWidth
            size="M"
            {...cta}
          />
        </ActionStyle>
      }
    </BaseStyle>
  );
};

TileCta.propTypes = {
  description: string,
  icon: string,
  title: string
};

TileCta.defaultProps = {
};

export default TileCta;
