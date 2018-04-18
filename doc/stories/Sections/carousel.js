import React from 'react';
import { number, boolean } from '@storybook/addon-knobs/react';
import { SectionPage } from '../../components';
import { SectionsCarousel } from '../../../src/components';
import { getRandomSectionList } from '../../utils/fixtures';
import { SM, MD, XL, query } from '../../../src/config/breakpoints';

const settings = {
  responsive: [
    {
      breakpoint: query[XL].minWidth,
      settings: {
        slidesToShow: 3.25
      }
    },
    {
      breakpoint: query[MD].minWidth,
      settings: {
        slidesToShow: 2.25,
        initialSlide: 2
      }
    },
    {
      breakpoint: query[SM].minWidth,
      settings: {
        slidesToShow: 1.25
      }
    }
  ]
};

export default (sectionTitle, sectionDescription) => () => {

  const others = {};

  const showNavigation = boolean('Show navigation', false);

  if (showNavigation) {
    others['showNavigation'] = true;
  }

  const navigateTo = path => alert(`Navigate to ${path}`);

  return (
    <SectionPage
      description={sectionDescription}
      title={sectionTitle}
    >
      <SectionsCarousel
        navigateTo={navigateTo}
        sections={getRandomSectionList(number('Sezioni', 6, {
          min: 1,
          max: 12,
          step: 1,
        }))}
        settings={settings}
        {...others}
      />
    </SectionPage>
  );
};
