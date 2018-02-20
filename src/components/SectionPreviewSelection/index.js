import React from 'react';
import {
  string,
  bool,
  func
} from 'prop-types';
import styled from 'styled-components';
import { CheckIcon, UncheckedIcon } from '../Icon/icons/basic';
import * as icons from '../Icon/icons/sections';
import {
  base,
  icon,
  name,
  selectButton
} from './style';

const BaseStyle = styled.div`${base}`;
const IconStyle = styled.div`${icon}`;
const NameStyle = styled.h3`${name}`;
const SelectionButtonStyle = styled.div`${selectButton}`;

class SectionPreviewSelection extends React.Component {

  static propTypes = {
    checked: bool,
    color: string.isRequired,
    handleOnChange: func,
    icon: string.isRequired,
    name: string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== this.state.checked) {
      this.setState({ checked: nextProps.checked });
    }
  }

  handleOnChange = () => this.setState(state => {
    const update = { checked: !state.checked };
    this.props.handleOnChange(update);
    return update;
  });

  render() {
    const {
      name,
      icon,
      color
    } = this.props;

    const {
      checked
    } = this.state;

    const Icon = icons[icon];

    return (
      <BaseStyle
        checked={checked}
        onClick={this.handleOnChange}
      >
        <IconStyle>
          <Icon
            color={checked ? color : 'currentColor'}
            size={60}
          />
        </IconStyle>
        <NameStyle>
          {name}
        </NameStyle>
        <SelectionButtonStyle>
          { checked ? <CheckIcon size={20} /> : <UncheckedIcon size={20} /> }
          <span>{ checked ? 'Section selected' : 'Select section' }</span>
        </SelectionButtonStyle>
      </BaseStyle>
    );
  }
}

export default SectionPreviewSelection;
