import React from 'react';
import ResourcePreview from '../ResourcePreview';
import cx from 'classnames';
import {
  func,
  arrayOf,
  shape
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
  navigateTo
}) {
  return (
    <ContainerQuery query={query}>
      {
        params => (
          <BaseStyle>
            <ItemsStyle>
              {
                resources.map(resource => {
                  return (
                    <ItemStyle
                      className={cx(params)}
                      key={resource.link}
                    >
                      <ResourcePreview
                        navigateTo={() => navigateTo(resource.path)}
                        {...resource}
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
  navigateTo: func,
  resources: arrayOf(shape(ResourcePreview.propTypes)).isRequired
};

export default ResourcesList;
