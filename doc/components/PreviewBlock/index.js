import React from 'react';
import { XS, query } from '../../../lib/config/breakpoints';
import styled from 'styled-components';
import { base } from './style';

// @TODO: optional parameter
// @TODO: add set height panel (with scroll)
// @TODO: proptypes
// @TODO: dark / ligth background switch

const BaseStyle = styled.div`${base}`;

class PreviewBlock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentBreakpoint: XS
    };
  }

  handleChangeBreakpoint = event => {
    this.setState({currentBreakpoint: event.target.value});
  };

  render() {
    const { children } = this.props;
    const { currentBreakpoint } = this.state;

    return (
      <BaseStyle style={{ textAlign: 'center' }}>
        <div>
          <select
            onChange={this.handleChangeBreakpoint}
            style={{ marginBottom: '30px' }}
            value={currentBreakpoint}
          >
            {
              Object.keys(query).map(key => {
                const config = query[key];
                return (
                  <option
                    key={key}
                    value={key}
                  >
                    {key} (min: {config.minWidth})
                  </option>
                );
              })
            }
          </select>
        </div>
        <div style={{ overflowY: 'scroll' }}>
          <div style={{ backgroundColor: '#1a0135', padding: '20px', display: 'inline-block' }}>
            <div style={{ width: `${query[currentBreakpoint].minWidth}px` }}>
              {children}
            </div>
          </div>
        </div>
      </BaseStyle>
    );
  }
}

export default PreviewBlock;
