import React from 'react';
import { SectionPage, ColorBlock } from '../../components';
import palettes from '../../../src/config/palettes';

// @TODO: remove style inline

export default (sectionTitle, sectionDescription) => () => {

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Status"
      title={sectionTitle}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          palettes.status.colors.map(color => {

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
    </SectionPage>
  );
};
