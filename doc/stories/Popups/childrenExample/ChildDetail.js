import React from 'react';
import { number } from '@storybook/addon-knobs/react';
import { ResourceDetail } from '../../../../src/components/index';
import { getRandomResource } from '../../../utils/fixtures';

export default function ChildDetailList() {

  const randomResource = getRandomResource({
    resourcesLength: number('Resources', 2, {
      range: true,
      min: 0,
      max: 10,
      step: 1,
    })
  }).frontmatter;

  return (
    <ResourceDetail
      navigateTo={() => alert('Navigate to: ' + randomResource.link)}
      navigateToSection={sectionId => alert('Navigate to section: ' + sectionId)}
      navigateToTopic={topicId => alert('Navigate to topic: ' + topicId)}
      {...randomResource}
    />
  );
}
