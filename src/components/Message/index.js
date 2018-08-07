import React from 'react';
import * as Icons from '../Icon/icons/basic';
import {
  string
} from 'prop-types';
import styled from 'styled-components';
import {
  base,
  title,
  icon,
  description,
} from './style';

const BaseStyle = styled.div`${base}`;
const TitleStyle = styled.h3`${title}`;
const DescriptionStyle = styled.p`${description}`;
const IconStyle = styled.div`${icon}`;

const Message = ({
  title,
  icon,
  description,
  ...others
}) => {
  const Icon = icon ? Icons[`${icon}Icon`] : null;

  return (
    <BaseStyle
      {...others}
    >
      <TitleStyle>{title}</TitleStyle>
      {
        description &&
        <DescriptionStyle
          dangerouslySetInnerHTML={{ __html: description }}
        />
      }
      {
        icon &&
        <IconStyle>
          <Icon size={44} />
        </IconStyle>
      }
    </BaseStyle>
  );
};

Message.displayName = 'Message';

Message.propTypes = {
  description: string,
  icon: string,
  title: string
};

export default Message;
