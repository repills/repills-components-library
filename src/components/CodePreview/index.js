import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { dark } from 'react-syntax-highlighter/styles/prism';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
registerLanguage('jsx', jsx);
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {
  base,
  buttonCopy,
  header,
  title
} from './style';


const BaseStyle = styled.div`${base}`;
const ButtonCopyStyle = styled.div`${buttonCopy}`;
const HeaderStyle = styled.div`${header}`;
const TitleStyle = styled.div`${title}`;

const overrideHighlighterStyle = {
  border: 0,
  boxShadow: 'none',
  backgroundColor: '#2a2a2a',
  borderRadius: 0,
  fontSize: '12px',
  margin: 0
};


class PreviewBlock extends React.Component {

  static propTypes = {
    children: string.isRequired,
    language: string,
    title: string.isRequired
  };

  static defaultProps = {
    language: 'javascript'
  };

  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
  }

  handleCopy = () => this.setState({ copied: true });

  render() {

    const {
      children,
      language,
      title,
      ...others
    } = this.props;

    const  {
      copied
    } = this.state;

    return (
      <BaseStyle
        {...others}
      >
        <HeaderStyle>
          <TitleStyle>{title}</TitleStyle>
          <CopyToClipboard
            onCopy={this.handleCopy}
            text={children}
          >
            <ButtonCopyStyle>{copied ? 'Copied' : 'Copy'}</ButtonCopyStyle>
          </CopyToClipboard>
        </HeaderStyle>
        <SyntaxHighlighter
          customStyle={overrideHighlighterStyle}
          language={language}
          style={dark}
        >
          {children}
        </SyntaxHighlighter>
      </BaseStyle>
    );

  }
}

export default PreviewBlock;
