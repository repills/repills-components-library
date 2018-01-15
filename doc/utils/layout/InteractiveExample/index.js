import React from 'react';
import PreviewBlock from '../PreviewBlock/index';
import { node } from 'prop-types';
import reactElementToJSXString from 'react-element-to-jsx-string';
import styled from 'styled-components';
import { base, pre, title, preview, code } from './style';

const BaseStyle = styled.div`${base}`;
const TitleStyle = styled.h2`${title}`;
const PreviewStyle = styled.div`${preview}`;
const PreStyle = styled.div`${pre}`;
const CodeStyle = styled.div`${code}`;

class InteractiveExample extends React.Component {

  static propTypes = {
    component: node.isRequired
  };

  getComponent = () => {
    const { component: Component, ...config } = this.props;
    return <Component {...config} />;
  };

  render() {
    return (
      <BaseStyle>
        <TitleStyle>Preview</TitleStyle>
        <PreviewStyle>
          <PreviewBlock>
            {this.getComponent()}
          </PreviewBlock>
        </PreviewStyle>
        <PreStyle>
          <CodeStyle>
            {reactElementToJSXString(this.getComponent())}
          </CodeStyle>
        </PreStyle>
      </BaseStyle>
    );
  }
}

export default InteractiveExample;
