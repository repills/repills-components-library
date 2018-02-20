import React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs/react';
import { TextField } from '../../../src/components';
import { SectionPage, InteractiveExample } from '../../components';

class TextFieldExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      dirty: false
    };
  }

  onHandleChange = event => this.setState({ value: event.target.value, dirty: true });

  render() {

    const {
      dirty,
      value
    } = this.state;

    const selectedStatus = select('Error Status', { notDetected: 'No detected', error: 'Error', noError: 'Everything OK' }, 'notDetected');

    let hasError;

    switch (selectedStatus) {
      case 'noError':
        hasError = false;
        break;
      case 'error':
        hasError = true;
        break;
      default:
        hasError = null;
    }

    return (
      <InteractiveExample
        component={TextField}
        dirty={dirty}
        disabled={boolean('Disabled', false)}
        expanded={boolean('Expanded', false)}
        handleOnBlur={() => {}}
        handleOnChange={this.onHandleChange}
        handleOnFocus={() => {}}
        hasError={hasError}
        id={text('Id', 'textfield_id')}
        name={text('Name', 'textfield_name')}
        placeholder={text('Placeholder', 'Placeholder...')}
        readOnly={boolean('Read only', false)}
        required={boolean('Required', false)}
        size={select('Size', { M: 'Medium', L: 'Large' }, 'M')}
        value={value}
      />
    );
  }
}

export default (sectionTitle, sectionDescription) => () => {

  return (
    <SectionPage
      sectionDescription={sectionDescription}
      subSectionTitle="Text field"
      title={sectionTitle}
    >
      <TextFieldExample />
    </SectionPage>
  );
};
