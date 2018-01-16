import React from 'react';
import { number, color } from '@storybook/addon-knobs/react';
import { SectionPage } from '../../utils/layout/index';
import * as c from '../../../src/components/index';
import icons from '../../../src/config/icons';

export default (sectionTitle, sectionDescription) => () => {

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      title={sectionTitle}
    >
      <div>
        {
          icons.types.map(config => {
            const name = config.name;
            const id = config.id;
            const Component = c[`${id}Icon`];
            return (
              <div key={id}>
                <h4>{name}</h4>
                <div style={{ backgroundColor: color('Background Color', '#fff'), padding: '10px' }}>
                  <Component
                    color={color('Icon Color', '#000')}
                    size={number('Font Size', 60, {
                      range: true,
                      min: 60,
                      max: 120,
                      step: 1,
                    })}
                  />
                </div>
              </div>
            );
          })
        }
      </div>
    </SectionPage>
  );
};
