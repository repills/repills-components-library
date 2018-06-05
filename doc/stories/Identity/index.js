import React from 'react';
import { createNewSection } from '../../utils/index';
import { ColorBlock } from '../../components';
import palettes from '../../../src/config/palettes';
import typography from '../../../src/config/typography';
import CodePreview from '../../../src/components/CodePreview';
import typographyStyles from '../../../src/shared/styles/typography';
import styled from 'styled-components';

const title = 'Style & Identity';

const addons = {
  centered: true,
};

//---------------
// COLOR PALETTES
//---------------

const paletteTitle = `${title} > Color Palettes`;
const paletteSectionConfig = {
  title: paletteTitle,
  description: 'Description will be here',
  addons
};

const renderPalette = paletteName => (
  <div>
    {
      palettes[paletteName].colors.map(color => {
        return (
          <div
            key={`color_${color.id}`}
            style={{ margin: '0 15px 15px 0' }}
          >
            <ColorBlock
              color={color}
            />
          </div>
        );
      })
    }
  </div>
);

createNewSection(paletteSectionConfig)
  .add(
    'Primary',
    () => renderPalette('basic'),
    // { viewport: 'ipad' } should override the default viewport but it doesn't work
  )
  .add(
    'Neutral',
    () => renderPalette('neutral')
  )
  .add(
    'Types',
    () => renderPalette('types')
  )
  .add(
    'Status',
    () => renderPalette('status')
  )
  .add(
    'Social',
    () => renderPalette('social')
  );

//-----------
// TYPOGRAPHY
//-----------

createNewSection({
  title: `${title} > Typography`,
  description: 'Description will be here',
  addons
})
  .add(
    'Styles',
    () => {
      return (
        <div>
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
        </div>
      );
    }
  );
