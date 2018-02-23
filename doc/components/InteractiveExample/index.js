import React from 'react';
import PreviewBlock from '../PreviewBlock';
import CodePreview from '../../../src/components/CodePreview';
import {
  func,
  object,
  string,
  bool,
  oneOfType
} from 'prop-types';
import reactElementToJSXString from 'react-element-to-jsx-string';
import styled from 'styled-components';
import { base, preview, highlighter } from './style';
import { getComponentDisplayName } from '../../utils';

const BaseStyle = styled.div`${base}`;
const PreviewStyle = styled.div`${preview}`;
const HighlighterStyle = styled.div`${highlighter}`;

class InteractiveExample extends React.Component {

  static propTypes = {
    component: oneOfType([func, object]).isRequired,
    previewMinHeight: string,
    showBreakpoints: bool
  };

  static defaultProps = {
    showBreakpoints: true
  };

  getComponent = () => {
    const { component: Component, showBreakpoints, previewMinHeight, ...config } = this.props;
    return <Component {...config} />;
  };

  render() {
    const {
      showBreakpoints,
      component,
      previewMinHeight
    } = this.props;

    return (
      <BaseStyle>
        <PreviewStyle>
          <PreviewBlock
            minHeight={previewMinHeight}
            showBreakpoints={showBreakpoints}
          >
            {this.getComponent()}
          </PreviewBlock>
        </PreviewStyle>
        <HighlighterStyle>
          <CodePreview
            title="Component Import"
          >
            {`import { ${getComponentDisplayName(component)} } from 'repills-react-components';`}
          </CodePreview>
          <CodePreview
            title="Component Usage"
            style={{marginTop: '30px'}}
          >
            {reactElementToJSXString(this.getComponent())}
          </CodePreview>
        </HighlighterStyle>
      </BaseStyle>
    );
  }
}

export default InteractiveExample;
