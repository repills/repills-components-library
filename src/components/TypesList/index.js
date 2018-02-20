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
  // items,
  item,
  itemsWrapper
} from './style';

const BaseStyle = styled.div`${base}`;
// const ItemsStyle = styled.div`${items}`;
const ItemsWrapperStyle = styled.div`${itemsWrapper}`;
const ItemStyle = styled.div`${item}`;

function TypesList({ types, navigateTo, shadeColor }) {
  return (
    <ContainerQuery query={query}>
      {
        params => (
          <BaseStyle
            shadeColor={shadeColor}
          >
            <ItemsWrapperStyle>
              {
                Object.keys(types).map(typeId => {
                  const type = types[typeId];
                  return (
                    <ItemStyle
                      className={cx(params)}
                      key={typeId}
                    >
                      <TypePreview
                        {...type}
                        count={type.resources.length}
                        icon={typeId.charAt(0).toUpperCase() + typeId.slice(1)}
                        navigateTo={navigateTo}
                      />
                    </ItemStyle>
                  );
                })
              }
            </ItemsWrapperStyle>
          </BaseStyle>
        )}
    </ContainerQuery>
  );
}


TypesList.propTypes = {
  navigateTo: func,
  shadeColor: string,
  types: object
};

export default TypesList;
