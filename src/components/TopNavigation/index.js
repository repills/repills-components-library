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
import ConsumeContainerQuery from '../../hoc/consume-container-query';

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
  onClickLogo,
  ...others
}) {

  return (
    <BaseStyle
      {...others}
    >
      <WrapperStyle className={cx(breakpointsStatus)}>
        <LogoContainerStyle
          className={cx(breakpointsStatus)}
          onClick={onClickLogo}
        >
          <span>
            <Logo
              color={basic.primary}
              secondaryColor={neutral.lowest}
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

TopNavigation.displayName = 'TopNavigation';

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
  items: [],
  breakpointsStatus: {}
};

export default ConsumeContainerQuery(TopNavigation);
