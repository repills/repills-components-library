import React from 'react';
import IconBlock from '../IconBlock';

// @TODO: style

export default ({ icons, settings }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {
        icons.map(config => {
          return (
            <div
              key={config.id}
              style={{ margin: '0 15px 15px 0' }}
            >
              <IconBlock
                config={config}
                settings={settings}
              />
            </div>
          );
        })
      }
    </div>
  );
};
