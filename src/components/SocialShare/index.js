import React from 'react';
import {
  oneOf,
  string
} from 'prop-types';
import styled from 'styled-components';
import * as icons from '../Icon/icons/social';
import {
  base
} from './style';

const BaseStyle = styled.a`${base}`;

const SocialShare = ({
  color,
  link,
  text,
  title,
  type,
  ...others
}) => {

  let iconName;
  let href;
  let target = null;
  const encodedLink = encodeURIComponent(link);
  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(text);

  switch (type) {
    case 'facebook':
      iconName = 'FacebookIcon';
      href = `https://www.facebook.com/sharer/sharer.php?u=${encodedLink}`;
      break;
    case 'twitter':
      iconName = 'TwitterIcon';
      href = `https://twitter.com/intent/tweet?url=${encodedLink}&text=${encodedText}`;
      break;
    case 'linkedin':
      iconName = 'LinkedinIcon';
      href = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedLink}&title=${encodedTitle}&summary=${encodedText}`;
      break;
    case 'googlePlus':
      iconName = 'GooglePlusIcon';
      href = `https://plus.google.com/share?url=${encodedLink}`;
      break;
    case 'google':
      iconName = 'GooglePlusIcon';
      href = `https://plus.google.com/share?url=${encodedLink}`;
      break;
    case 'email':
      iconName = 'EmailIcon';
      href = `mailto:?subject=${encodedTitle}&body=${encodedText}%0D%0A${encodedLink}`;
      target = '_self';
      break;
    default:
      break;
  }

  const Icon = icons[iconName];

  return (
    <BaseStyle
      {...others}
      href={href}
      target={target ? target : '_blank'}
    >
      <Icon
        color={color}
        size={36}
      />
    </BaseStyle>
  );
};

SocialShare.propTypes = {
  color: string,
  link: string.isRequired,
  text: string,
  title: string,
  type: oneOf(['email', 'facebook', 'twitter', 'linkedin',
    'google']).isRequired
};

SocialShare.defaultProps = {
  text: '',
  title: ''
};

export default SocialShare;
