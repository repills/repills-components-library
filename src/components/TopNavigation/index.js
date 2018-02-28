import React from 'react';
import styled from 'styled-components';
import theme from '../../config/theme';
import {
  string,
  bool,
  func,
  arrayOf,
  shape
} from 'prop-types';
import cx from 'classnames';
import { ContainerQuery } from 'react-container-query';
import { query } from '../../config/breakpoints';
import Logo from '../Logo';

const { basic, neutral } = theme.palettes;

import {
  base,
  logoContainer,
  navigation,
  navigationItem
} from './style';

const BaseStyle = styled.div`${base}`;
const LogoContainerStyle = styled.div`${logoContainer}`;
const NavigationStyle = styled.nav`${navigation}`;

function TopNavigation({
  items,
}) {

  return (
    <ContainerQuery query={query}>
      {
        params => (
          <BaseStyle
            className={cx(params)}
          >
            <LogoContainerStyle
              className={cx(params)}
            >
              <a
                href="/"
              >
                <Logo
                  color={basic.primary}
                  secondaryColor={neutral.highest}
                />
              </a>
            </LogoContainerStyle>
            {
              items.length > 0 &&
              <NavigationStyle
                className={cx(params)}
              >
                {
                  items.map((item,i) => {

                    const NavigationItemStyle = styled[(item.href ? 'a' : 'div')]`${navigationItem}`;

                    return (
                      <NavigationItemStyle
                        key={`item-${i}`}
                        {...item}
                      >
                        {item.label}
                      </NavigationItemStyle>
                    );
                  })
                }
              </NavigationStyle>
            }
          </BaseStyle>
        )
      }
    </ContainerQuery>
  );
}

TopNavigation.propTypes = {
  items: arrayOf(shape({
    href: string,
    label: string.isRequired,
    onClick: func
  }))
};

TopNavigation.defaultProps = {
  items: []
};

export default TopNavigation;
