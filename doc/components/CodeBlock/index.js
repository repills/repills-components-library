import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { dark } from 'react-syntax-highlighter/styles/prism';

import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
registerLanguage('jsx', jsx);

import { base } from './style';

const BaseStyle = styled.div`${base}`;

const overrideHighlighterStyle = {
  border: '0px',
  boxShadow: 'none',
  backgroundColor: '#222',
  borderRadius: '0px',
  fontSize: '12px'
};

function CodeBlock({ children }) {
  return (
    <BaseStyle>
      <SyntaxHighlighter
        customStyle={overrideHighlighterStyle}
        language='javascript'
        style={dark}
      >
        {children}
      </SyntaxHighlighter>
    </BaseStyle>
  );
}

CodeBlock.propTypes = {
  children: string.isRequired
};

export default CodeBlock;
