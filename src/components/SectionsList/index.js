import React from 'react';
import SectionPreview from '../SectionPreview';
import {
  func,
  arrayOf,
  shape
} from 'prop-types';
import styled from 'styled-components';
import { ContainerQuery } from 'react-container-query';
import { query } from '../../config/breakpoints';
import { items, item } from './style';

const ItemsStyle = styled.div`${items}`;
const ItemStyle = styled.div`${item}`;

function SectionsList({
  sections,
  navigateTo,
  ...others
}) {
  const count = sections.length;
  return (
    <ContainerQuery query={query}>
      {
        params => (
          <div
            {...others}
          >
            <ItemsStyle
              breakpointsStatus={params}
            >
              {
                sections.map(section => {
                  return (
                    <ItemStyle
                      breakpointsStatus={params}
                      count={count}
                      key={section.id}
                    >
                      <SectionPreview
                        navigateTo={() => navigateTo(section.path)}
                        {...section}
                      />
                    </ItemStyle>
                  );
                })
              }
            </ItemsStyle>
          </div>
        )}
    </ContainerQuery>
  );
}

SectionsList.propTypes = {
  navigateTo: func,
  sections: arrayOf(shape(SectionPreview.propTypes)).isRequired
};

export default SectionsList;
