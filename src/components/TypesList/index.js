import React from 'react';
import TypePreview from '../TypePreview';
import {
  object,
  func,
  string
} from 'prop-types';
import styled from 'styled-components';
import ConsumeContainerQuery from '../../hoc/consume-container-query';
import {
  base,
  items,
  item
} from './style';

const BaseStyle = styled.div`${base}`;
const ItemsStyle = styled.div`${items}`;
const ItemStyle = styled.div`${item}`;

function TypesList({
  activeKey,
  breakpointsStatus,
  types,
  navigateTo,
  ...others
}) {
  const count = Object.entries(types).length;
  return (
    <BaseStyle
      {...others}
    >
      <ItemsStyle
        breakpointsStatus={breakpointsStatus}
      >
        {
          Object
            .entries(types)
            .sort((a,b) => a[1].resources.length < b[1].resources.length)
            .map(([key,type]) => {
              return (
                <ItemStyle
                  breakpointsStatus={breakpointsStatus}
                  count={count}
                  key={key}
                >
                  <TypePreview
                    {...type}
                    active={key === activeKey}
                    count={type.resources.length}
                    icon={key.charAt(0).toUpperCase() + key.slice(1)}
                    navigateTo={navigateTo}
                  />
                </ItemStyle>
              );
            })
        }
      </ItemsStyle>
    </BaseStyle>
  );
}


TypesList.propTypes = {
  activeKey: string,
  breakpointsStatus: object,
  navigateTo: func,
  types: object
};

TypesList.defaultProps = {
  breakpoints: {}
};

export default ConsumeContainerQuery(TypesList);
