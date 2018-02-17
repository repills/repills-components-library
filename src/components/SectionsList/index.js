import React from 'react';
import SectionPreview from '../SectionPreview';
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

function SectionsList({
  sections,
  navigateTo
}) {
  return (
    <ContainerQuery query={query}>
      {
        params => (
          <BaseStyle>
            <ItemsStyle className={cx(params)}>
              {
                sections.map(section => {
                  return (
                    <ItemStyle
                      className={cx(params)}
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
          </BaseStyle>
        )}
    </ContainerQuery>
  );
}

SectionsList.propTypes = {
  navigateTo: func,
  sections: arrayOf(shape(SectionPreview.propTypes)).isRequired
};

export default SectionsList;
