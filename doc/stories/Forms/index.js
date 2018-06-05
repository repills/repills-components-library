import React from 'react';
import { createNewSection } from '../../utils/index';
import {
  Select,
  TextField,
  TopicSelector,
  SectionSelector,
} from '../../../src/components';
import {
  select,
  boolean,
  text
} from '@storybook/addon-knobs/react';
import { sections } from 'repills-config';

const title = 'Components > Forms ';

const addons = {
  info: true,
};

//-------
// SELECT
//-------

const options = [
  {
    label: 'Option 1',
    value: 'value 1'
  },
  {
    label: 'Option 2 with a text very very long',
    value: 'value 2'
  },
  {
    label: 'Option 3 disabled',
    value: 'value 3',
    disabled: true
  },
  {
    label: 'Opzion 4',
    value: 'value 4'
  },
  {
    label: 'Option 5',
    value: 'value 5'
  },
];

const onChangeHandler = ({ value, index }) => console.log(`Value: ${value} - Index: ${index}`);

createNewSection({
  title: `${title}/ Select`,
  description: 'Description will be here',
  addons
})
  .add(
    'Playground',
    () => {

      const others = {};
      const disabled = boolean('Disabled', false);
      const expanded = boolean('Expanded', false);
      const placeholder = text('Placeholder', '');

      if (disabled) {
        others['disabled'] = true;
      }

      if (expanded) {
        others['expanded'] = true;
      }

      if (placeholder.length > 0) {
        others['placeholder'] = placeholder;
      }

      return (
        <Select
          handleOnChange={onChangeHandler}
          options={options}
          size={select('Size', { Medium: 'M', Large: 'L' }, 'M')}
          {...others}
        />
      );
    }
  );

createNewSection({
  title: `${title}/ Select`,
  description: 'Description will be here',
  addons: {}
})
  .add(
    'Cases',
    () => {
      return (
        <div>
          <h3>Expanded</h3>
          <Select
            expanded
            handleOnChange={onChangeHandler}
            options={options}
          />
          <h3>Disabled</h3>
          <Select
            disabled
            handleOnChange={onChangeHandler}
            options={options}
          />
          <h3>Sizes</h3>
          <h4>Medium (Default)</h4>
          <Select
            handleOnChange={onChangeHandler}
            options={options}
          />
          <h4>Large</h4>
          <Select
            handleOnChange={onChangeHandler}
            options={options}
            size="L"
          />
        </div>
      );
    }
  );

//----------
// TEXTFIELD
//----------

class TextFieldExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  onHandleChange = ({ value, dirty }) => this.setState({ value, dirty });

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
      <TextField
        dirty={dirty}
        disabled={boolean('Disabled', false)}
        expanded={boolean('Expanded', false)}
        handleOnBlur={() => {}}
        handleOnChange={this.onHandleChange}
        handleOnFocus={() => {}}
        hasError={hasError}
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


createNewSection({
  title: `${title}/ TextField`,
  description: 'Description will be here',
  addons
})
  .add(
    'Cases',
    () => (
      <div>

        <h3>Basic</h3>
        <TextField />

        <h3>Disabled</h3>
        <TextField disabled />

        <h3>Expanded</h3>
        <TextField expanded />

        <h3>Read only</h3>
        <TextField readOnly />

        <h3>Value</h3>
        <TextField value="It has value" />

        <h3>Error</h3>
        <TextField
          hasError
          value="It has error"
        />

        <h3>Error</h3>
        <TextField
          hasError={false}
          value="It's ok"
        />

        <h3>Placeholder</h3>
        <TextField placeholder={'Placeholder...'} />

        <h3>Sizes</h3>
        <h4>Medium (Default)</h4>
        <TextField />
        <h4>Large</h4>
        <TextField size="L" />

        <h3>HTML required</h3>
        <TextField required />

        <h3>Types</h3>
        <h4>Password type</h4>
        <TextField
          type="password"
          value="yourpassword"
        />

        <h4>Number type</h4>
        <TextField
          type="number"
          value={18}
        />

        <h4>Force to be dirty</h4>
        <TextField dirty />

      </div>
    )
  );

//----------
// SELECTORS
//----------

createNewSection({
  title: `${title}/ Selectors`,
  description: 'Description will be here',
  addons
})
  .add(
    'Topics',
    () => (
      <TopicSelector
        topics={sections[0].topics}
      />
    )
  )
  .add(
    'Sections',
    () => (
      <SectionSelector
        sections={sections}
      />
    )
  );
