import React from 'react';
import styled from 'styled-components';
import theme from '../../config/theme';
import {
  string,
  bool,
  func,
  arrayOf,
  shape,
  object
} from 'prop-types';
import cx from 'classnames';
import Logo from '../Logo';
import Spinner from '../Spinner';

const { basic, neutral } = theme.palettes;

import {
  base,
  logoContainer,
  navigation,
  navigationItem,
  wrapper
} from './style';

const BaseStyle = styled.div`${base}`;
const WrapperStyle = styled.div`${wrapper}`;
const LogoContainerStyle = styled.div`${logoContainer}`;
const NavigationStyle = styled.nav`${navigation}`;

function TopNavigation({
  items,
  breakpointsStatus,
  // loading,
  onClickLogo,
  ...others
}) {

  const loadingStatus = breakpointsStatus ? Object.keys(breakpointsStatus).length === 0 : false;

  return (
    <BaseStyle
      {...others}
    >
      { loadingStatus && <Spinner position="absolute" /> }
      <WrapperStyle className={cx(breakpointsStatus)}>
        <LogoContainerStyle
          className={cx(breakpointsStatus)}
          onClick={onClickLogo}
        >
          <span>
            <Logo
              color={basic.primary}
              secondaryColor={neutral.higher}
            />
          </span>
        </LogoContainerStyle>
        {
          items.length > 0 &&
          <NavigationStyle
            className={cx(breakpointsStatus)}
          >
            {
              items.filter(i => !i.hidden).map((item, i) => {

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
      </WrapperStyle>
    </BaseStyle>
  );
}

TopNavigation.propTypes = {
  breakpointsStatus: object,
  items: arrayOf(shape({
    href: string,
    label: string.isRequired,
    onClick: func,
    hidden: bool
  })),
  onClickLogo: func,
};

TopNavigation.defaultProps = {
  items: []
};

export default TopNavigation;
