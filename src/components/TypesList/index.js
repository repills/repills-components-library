import React from 'react';
import TypePreview from '../TypePreview';
import cx from 'classnames';
import { object } from 'prop-types';
import styled from 'styled-components';
import { ContainerQuery } from 'react-container-query';
import { query } from '../../config/breakpoints';
import { base, items, item } from './style';

const BaseStyle = styled.div`${base}`;
const ItemsStyle = styled.div`${items}`;
const ItemStyle = styled.div`${item}`;

function TypesList({ types }) {
  return (
    <ContainerQuery query={query}>
      {
        params => (
          <BaseStyle>
            <ItemsStyle>
              {
                Object.keys(types).map(typeId => {
                  const type = types[typeId];
                  return (
                    <ItemStyle
                      className={cx(params)}
                      key={typeId}
                    >
                      <TypePreview
                        color={type.color}
                        count={type.resources.length}
                        icon={typeId}
                        label={type.label}
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
  types: object
};

export default TypesList;
