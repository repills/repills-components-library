import React from 'react';
import { TopicSelector } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components';
import { sections } from 'repills-config';

class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
  }

  render() {

    return (
      <InteractiveExample
        component={TopicSelector}
        handleOnChange={({ selected }) => this.setState({ selected })}
        selected={this.state.selected}
        topics={sections[0].topics}
      />
    );
  }
}

export default (sectionTitle, sectionDescription) => () => {

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Topic"
      title={sectionTitle}
    >
      <Example />
    </SectionPage>
  );
};
