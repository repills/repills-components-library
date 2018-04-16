import React from 'react';
import {
  arrayOf,
  shape,
  object
} from 'prop-types';
import styled from 'styled-components';
import FeatureItem from '../FeatureItem';
import {
  base,
  items,
  item
} from './style';
import QueryHandler from '../QueryHandler';

const BaseStyle = styled.div`${base}`;
const ItemsStyle = styled.div`${items}`;
const ItemStyle = styled.div`${item}`;

const FeatureList = ({
  breakpointsStatus,
  features,
  skin,
  ...others
}) => {

  const count = features.length;

  return (
    <BaseStyle
      {...others}
    >
      <ItemsStyle breakpointsStatus={breakpointsStatus}>
        {
          features.map((feature,i) => (
            <ItemStyle
              breakpointsStatus={breakpointsStatus}
              count={count}
              key={`feature-${i}`}
              skin={skin}
            >
              <FeatureItem
                {...feature}
                skin={skin}
              />
            </ItemStyle>
          ))
        }
      </ItemsStyle>
    </BaseStyle>
  );
};

FeatureList.propTypes = {
  breakpointsStatus: object,
  features: arrayOf(shape(FeatureItem.propTypes)).isRequired,
  skin: FeatureItem.propTypes.skin
};

FeatureList.defaultProps = {
  breakpointsStatus:{}
};

export default QueryHandler(FeatureList);
