import React from 'react';
import styled from 'styled-components';
import { SectionPage, CodeBlock } from '../../components';
import typography from '../../../src/config/typography';
import typographyStyles from '../../../src/shared/styles/typography';

export default (sectionTitle, sectionDescription) => () => {

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      size="S"
      title={sectionTitle}
    >
      <h4>Usage</h4>
      <CodeBlock>
        {`import { typography } from 'dab-component-lib';
import styled from 'styled-components';

const MyStyledComponent = styled.YOUR_HTML_TAG\`\${typography.TYPOGRAPHY_ID}\``}
      </CodeBlock>

      {
        typography.map(style => {

          const Title = styled.div`${typographyStyles[style.id]}`;

          // @TODO: style

          return (
            <div key={style.id}>
              <hr style={{ margin: '40px 0' }} />
              <div>{style.name}</div>
              <Title>{style.family}-{style.weight} / {style.size}</Title>
              <CodeBlock>
                {`const MyStyledComponent = styled.YOUR_HTML_TAG\`\${typography.${style.id}}\``}
              </CodeBlock>
            </div>
          );
        })
      }
    </SectionPage>
  );
};
