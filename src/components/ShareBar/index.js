import React from 'react';
import {
  oneOf,
  string,
  arrayOf
} from 'prop-types';
import styled from 'styled-components';
import SocialShare from '../SocialShare';
import {
  base,
  item
} from './style';

const BaseStyle = styled.div`${base}`;
const ItemStyle = styled.div`${item}`;

const ShareBar = ({
  link,
  text,
  title,
  color,
  types,
  ...others
}) => {

  return (
    <BaseStyle
      {...others}
    >
      {
        types.map(type => (
          <ItemStyle
            key={type}
          >
            <SocialShare
              color={color}
              link={link}
              text={text}
              title={title}
              type={type}
            />
          </ItemStyle>
        ))
      }
    </BaseStyle>
  );
};

ShareBar.propTypes = {
  color: string,
  link: string.isRequired,
  text: string,
  title: string,
  types: arrayOf(oneOf(['email', 'facebook', 'twitter', 'linkedin',
    'google'])).isRequired
};

ShareBar.defaultProps = {
  text: '',
  title: ''
};

export default ShareBar;
