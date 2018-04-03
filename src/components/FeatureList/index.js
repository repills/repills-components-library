import React from 'react';
import {
  string,
  arrayOf,
  shape
} from 'prop-types';
import styled from 'styled-components';
import { ContainerQuery } from 'react-container-query';
import FeatureItem from '../FeatureItem';
import Spinner from '../Spinner';
import { query } from '../../config/breakpoints';
import {
  base,
  items,
  item
} from './style';

const BaseStyle = styled.div`${base}`;
const ItemsStyle = styled.div`${items}`;
const ItemStyle = styled.div`${item}`;

const FeatureList = ({
  features,
  ...others
}) => {

  const count = features.length;

  return (
    <ContainerQuery query={query}>
      {
        params => {
          const loading = Object.keys(params).length === 0;

          return (
            <BaseStyle
              {...others}
            >
              { loading && <Spinner /> }
              {
                !loading &&
                <ItemsStyle breakpointsStatus={params}>
                  {
                    features.map((feature,i) => (
                      <ItemStyle
                        breakpointsStatus={params}
                        count={count}
                        key={`feature-${i}`}
                      >
                        <FeatureItem
                          {...feature}
                        />
                      </ItemStyle>
                    ))
                  }
                </ItemsStyle>
              }
            </BaseStyle>
          );
        }}
    </ContainerQuery>
  );
};

FeatureList.propTypes = {
  features: arrayOf(shape({
    title: string.isRequired,
    description: string,
    icon: string.isRequired
  })).isRequired
};

FeatureList.defaultProps = {
};

export default FeatureList;
