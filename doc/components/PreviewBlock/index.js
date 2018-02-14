import React from 'react';
import { XS, query } from '../../../src/config/breakpoints';
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

  handleChangeBackground = event => {
    this.setState({ currentBackground: event.target.value });
  };

  render() {
    const { children } = this.props;
    const {
      currentBreakpoint,
      currentBackground
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
          <select
            onChange={this.handleChangeBackground}
            style={{ marginBottom: '30px' }}
            value={currentBackground}
          >
            {
              this.backgrounds.map(background => {
                return (
                  <option
                    key={background.name}
                    value={background.value}
                  >
                    {background.name}
                  </option>
                );
              })
            }
          </select>
        </div>
        <div style={{ overflowY: 'scroll' }}>
          <div style={{ backgroundColor: currentBackground, padding: '20px', display: 'inline-block' }}>
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
