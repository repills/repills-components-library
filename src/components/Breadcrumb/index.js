import React from 'react';
import * as Icons from '../Icon/icons';
import {
  string,
  oneOf
} from 'prop-types';
import Button from '../Button';
import styled from 'styled-components';
import {
  base
} from './style';

const BaseStyle = styled.div`${base}`;

const Breadcrumb = ({
  items,
  ...others
}) => {
  return (
    <BaseStyle
      {...others}
    >
      {
        items.map((item, i) => (
          <div key={`bc-item-${i}`}>
            <Button
              {...item}
              autoWidth
              size="S"
              skin="ghost"
            />
          </div>
        ))
      }
    </BaseStyle>
  );
};

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.propTypes = {
};

Breadcrumb.defaultProps = {
};

export default Breadcrumb;
