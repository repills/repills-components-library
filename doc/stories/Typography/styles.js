import React from 'react';
import styled from 'styled-components';
import { SectionPage } from '../../components';
import CodePreview from '../../../src/components/CodePreview';
import typography from '../../../src/config/typography';
import typographyStyles from '../../../src/shared/styles/typography';

export default (sectionTitle, sectionDescription) => () => {

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      size="S"
      title={sectionTitle}
    >
      <CodePreview
        title="Usage"
      >
        {`import { typography } from 'repills-react-components';
import styled from 'styled-components';

const MyStyledComponent = styled.YOUR_HTML_TAG\`\${typography.TYPOGRAPHY_ID}\``}
      </CodePreview>

      {
        typography.map(style => {

          const Title = styled.div`${typographyStyles[style.id]}`;

          // @TODO: style

          return (
            <div key={style.id}>
              <hr style={{ margin: '40px 0' }} />
              <Title>{style.family}-{style.weight} / {style.size}</Title>
              <CodePreview
                title={`Style ${style.name}`}
              >
                {`const MyStyledComponent = styled.YOUR_HTML_TAG\`\${typography.${style.id}}\``}
              </CodePreview>
            </div>
          );
        })
      }
    </SectionPage>
  );
};
