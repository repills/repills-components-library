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
import {
  base,
  preview,
  code
} from './style';
import { getComponentDisplayName } from '../../utils';

const BaseStyle = styled.div`${base}`;
const PreviewStyle = styled.div`${preview}`;
const CodeStyle = styled(CodePreview)`${code}`;

class InteractiveExample extends React.Component {

  static propTypes = {
    component: oneOfType([func, object]).isRequired,
    hasQueryHandler: bool,
    previewMinHeight: string,
    showBreakpoints: bool,
  };

  static defaultProps = {
    showBreakpoints: true
  };

  getComponent = () => {
    const { component: Component, showBreakpoints, previewMinHeight, previewSkin, ...config } = this.props;
    return <Component {...config} />;
  };

  render() {
    const {
      showBreakpoints,
      component,
      previewMinHeight,
      previewSkin
    } = this.props;

    return (
      <BaseStyle>
        <PreviewStyle>
          <PreviewBlock
            minHeight={previewMinHeight}
            previewSkin={previewSkin}
            showBreakpoints={showBreakpoints}
          >
            { this.getComponent() }
          </PreviewBlock>
        </PreviewStyle>
        <CodeStyle
          title="Component Import"
        >
          {`import { ${getComponentDisplayName(component)} } from 'repills-react-components';`}
        </CodeStyle>
        <CodeStyle
          title="Component Usage"
        >
          {reactElementToJSXString(this.getComponent())}
        </CodeStyle>
      </BaseStyle>
    );
  }
}

export default InteractiveExample;
