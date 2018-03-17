import React from 'react';
import TypePreview from '../TypePreview';
import cx from 'classnames';
import {
  object,
  func,
  string
} from 'prop-types';
import styled from 'styled-components';
import { ContainerQuery } from 'react-container-query';
import { query } from '../../config/breakpoints';
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
  types,
  navigateTo
}) {
  return (
    <ContainerQuery query={query}>
      {
        params => (
          <BaseStyle>
            <ItemsStyle
              className={cx(params)}
            >
              {
                Object
                  .entries(types)
                  .sort((a,b) => a[1].resources.length < b[1].resources.length)
                  .map(([key,type]) => {
                    return (
                      <ItemStyle
                        className={cx(params)}
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
        )}
    </ContainerQuery>
  );
}


TypesList.propTypes = {
  activeKey: string,
  navigateTo: func,
  types: object
};

export default TypesList;
