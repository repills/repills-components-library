import React from 'react';
import SectionPreview from '../SectionPreview';
import {
  func,
  arrayOf,
  shape,
  object
} from 'prop-types';
import styled from 'styled-components';
import { base, items, item } from './style';
import ConsumeContainerQuery from '../../hoc/consume-container-query';

const BaseStyle = styled.div`${base}`;
const ItemsStyle = styled.div`${items}`;
const ItemStyle = styled.div`${item}`;

function SectionsList({
  breakpointsStatus,
  sections,
  navigateTo,
  ...others
}) {
  const count = sections.length;
  return (
    <BaseStyle
      {...others}
    >
      <ItemsStyle
        breakpointsStatus={breakpointsStatus}
      >
        {
          sections.map(section => {
            return (
              <ItemStyle
                breakpointsStatus={breakpointsStatus}
                count={count}
                key={section.id}
              >
                <SectionPreview
                  navigateTo={() => navigateTo(section.basePath)}
                  {...section}
                />
              </ItemStyle>
            );
          })
        }
      </ItemsStyle>
    </BaseStyle>
  );
}

SectionsList.propTypes = {
  breakpointsStatus: object,
  navigateTo: func,
  sections: arrayOf(shape(SectionPreview.propTypes)).isRequired
};

SectionsList.defaultProps = {
  breakpointsStatus: {}
};

export default ConsumeContainerQuery(SectionsList);
