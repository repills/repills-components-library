import React from 'react';
import PreviewBlock from '../PreviewBlock';
import { func, object, bool, oneOfType } from 'prop-types';
import reactElementToJSXString from 'react-element-to-jsx-string';
import styled from 'styled-components';
import { dark } from 'react-syntax-highlighter/styles/prism';

import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
registerLanguage('jsx', jsx);

import { base, highlighter, preview } from './style';
import { getComponentDisplayName } from '../../utils';


const BaseStyle = styled.div`${base}`;
const PreviewStyle = styled.div`${preview}`;
const HighlighterStyle = styled.div`${highlighter}`;

const overrideHighlighterStyle = {
  border: '0px',
  boxShadow: 'none',
  backgroundColor: '#222',
  borderRadius: '0px',
  fontSize: '12px'
};

class InteractiveExample extends React.Component {

  static propTypes = {
    component: oneOfType([func, object]).isRequired,
    showBreakpoints: bool
  };

  static defaultProps = {
    showBreakpoints: true
  };

  getComponent = () => {
    const { component: Component, showBreakpoints, ...config } = this.props;
    return <Component {...config} />;
  };

  render() {
    const { showBreakpoints, component } = this.props;

    return (
      <BaseStyle>
        <PreviewStyle>
          <PreviewBlock
            showBreakpoints={showBreakpoints}
          >
            {this.getComponent()}
          </PreviewBlock>
        </PreviewStyle>
        <HighlighterStyle>
          <SyntaxHighlighter
            customStyle={overrideHighlighterStyle}
            language='javascript'
            style={dark}
          >
            {`import { ${getComponentDisplayName(component)} } from 'repills-react-components'`}
          </SyntaxHighlighter>
        </HighlighterStyle>
        <HighlighterStyle>
          <SyntaxHighlighter
            customStyle={overrideHighlighterStyle}
            language='javascript'
            style={dark}
          >
            {reactElementToJSXString(this.getComponent())}
          </SyntaxHighlighter>
        </HighlighterStyle>
      </BaseStyle>
    );
  }
}

export default InteractiveExample;
