import React from 'react';
import styled from 'styled-components';
import theme from '../../config/theme';
import cx from 'classnames';
import { ContainerQuery } from 'react-container-query';
import { query } from '../../config/breakpoints';
import Logo from '../Logo';

const { basic, neutral } = theme.palettes;

import {
  base,
  logoLink
} from './style';

const BaseStyle = styled.nav`${base}`;
const LogoLinkStyle = styled.a`${logoLink}`;

function TopNavigation() {
  return (
    <ContainerQuery query={query}>
      {
        params => (
          <BaseStyle>
            <LogoLinkStyle
              className={cx(params)}
              href="/"
            >
              <Logo
                color={basic.primary}
                secondaryColor={neutral.highest}
              />
            </LogoLinkStyle>
          </BaseStyle>
        )
      }
    </ContainerQuery>
  );
}

TopNavigation.propTypes = {
};

export default TopNavigation;
