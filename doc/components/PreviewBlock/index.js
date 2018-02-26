import React from 'react';
import { XS, query } from '../../../src/config/breakpoints';
import styled from 'styled-components';
import {
  base,
  example,
  exampleHeader,
  exampleBody
} from './style';

// @TODO: optional parameter
// @TODO: add set height panel (with scroll)
// @TODO: proptypes
// @TODO: dark / ligth background switch

const BaseStyle = styled.div`${base}`;
const ExampleStyle = styled.div`${example}`;
const ExampleHeaderStyle = styled.div`${exampleHeader}`;
const ExampleBodyStyle = styled.div`${exampleBody}`;

class PreviewBlock extends React.Component {

  constructor(props) {
    super(props);
    const {
      breakpoint,
      background
    } = this.props;

    this.backgrounds = [
      {
        name: 'Primary Highest',
        value: '#190135'
      },
      {
        name: 'Neutral Medium',
        value: '#e0e0e0'
      },
      {
        name: 'Neutral Lowest',
        value: '#fff'
      }
    ];

    this.state = {
      currentBreakpoint: breakpoint || XS,
      currentBackground: background || '#fff'
    };
  }

  handleChangeBreakpoint = event => {
    this.setState({ currentBreakpoint: event.target.value });
  };

  render() {
    const { children } = this.props;
    const {
      currentBreakpoint
    } = this.state;

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
        <ExampleStyle>
          <ExampleHeaderStyle>Example</ExampleHeaderStyle>
          <ExampleBodyStyle>
            <div style={{ width: `${query[currentBreakpoint].minWidth}px` }}>
              {children}
            </div>
          </ExampleBodyStyle>
        </ExampleStyle>
      </BaseStyle>
    );
  }
}

export default PreviewBlock;
