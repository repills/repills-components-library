import React from 'react';
import TopicPreview from '../TopicPreview';
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

function TopicsList({ 
  topics,
  navigateTo,
  ...others
}) {

  const count = topics.length;
  return (
    <ContainerQuery query={query}>
      {
        params => (
          <BaseStyle
            {...others}
          >
            <ItemsStyle
              breakpointsStatus={params}
            >
              {
                topics.map(topic => (
                  <ItemStyle
                    breakpointsStatus={params}
                    count={count}
                    key={topic.slug}
                  >
                    <TopicPreview
                      navigateTo={() => navigateTo(topic.path)}
                      {...topic}
                    />
                  </ItemStyle>
                ))
              }
            </ItemsStyle>
          </BaseStyle>
        )}
    </ContainerQuery>
  );
}

TopicsList.propTypes = {
  navigateTo: func,
  topics: arrayOf(shape(TopicPreview.propTypes)).isRequired
};

export default TopicsList;
