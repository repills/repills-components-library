import React from 'react';
import ResourcePreview from '../ResourcePreview';
import cx from 'classnames';
import {
  arrayOf,
  shape,
  string,
  func
} from 'prop-types';
import styled from 'styled-components';
import { ContainerQuery } from 'react-container-query';
import { query } from '../../config/breakpoints';
import { base, items, item } from './style';

const BaseStyle = styled.div`${base}`;
const ItemsStyle = styled.div`${items}`;
const ItemStyle = styled.div`${item}`;

function ResourcesList({
  resources,
  dateType,
  handleDetailView,
  ...others
}) {

  const count = resources.length;

  return (
    <ContainerQuery query={query}>
      {
        params => (
          <BaseStyle
            {...others}
          >
            <ItemsStyle className={cx(params)}>
              {
                resources.map(resource => {
                  return (
                    <ItemStyle
                      className={cx(params)}
                      count={count}
                      key={resource.link}
                    >
                      <ResourcePreview
                        {...resource}
                        dateType={dateType}
                        handleDetailView={handleDetailView}
                      />
                    </ItemStyle>
                  );
                })
              }
            </ItemsStyle>
          </BaseStyle>
        )
      }
    </ContainerQuery>
  );
}

ResourcesList.propTypes = {
  dateType: string,
  handleDetailView: func,
  resources: arrayOf(shape(ResourcePreview.propTypes)).isRequired
};

export default ResourcesList;
