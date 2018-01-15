import React from 'react'
import PreviewBlock from './PreviewBlock'
import reactElementToJSXString from 'react-element-to-jsx-string';

class InteractiveExample extends React.Component {

  getComponent = () => {
    const {component: Component, ...config } = this.props;
    return <Component {...config} />
  };

  render() {
    return (
      <div>
        <PreviewBlock>
          {this.getComponent()}
        </PreviewBlock>
        <pre>
          <code>
            {reactElementToJSXString(this.getComponent())}
          </code>
        </pre>
      </div>
    )
  }
}

export default InteractiveExample