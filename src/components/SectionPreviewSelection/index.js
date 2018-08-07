import React from 'react';
import {
  string,
  bool,
  func
} from 'prop-types';
import styled from 'styled-components';
import { AddIcon, CheckedIcon } from '../Icon/icons/basic';
import * as icons from '../Icon/icons/sections';
import theme from '../../config/theme';
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
      ...others
    } = this.props;

    const {
      checked
    } = this.state;

    const Icon = icons[icon];

    return (
      <BaseStyle
        {...others}
        checked={checked}
        onClick={this.handleOnChange}
      >
        <IconStyle
          checked={checked}
        >
          <Icon
            size={60}
          />
        </IconStyle>
        <NameStyle>
          {name}
        </NameStyle>
        <SelectionButtonStyle>
          { checked ?
            <CheckedIcon
              color={checked ? theme.palettes.status.ok : null}
              size={20}
            /> :
            <AddIcon size={20} />
          }
          <span>{ checked ? 'Section selected' : 'Select section' }</span>
        </SelectionButtonStyle>
      </BaseStyle>
    );
  }
}

SectionPreviewSelection.displayName = 'SectionPreviewSelection';

SectionPreviewSelection.propTypes = {
  checked: bool,
  color: string.isRequired,
  handleOnChange: func,
  icon: string.isRequired,
  name: string.isRequired
};

export default SectionPreviewSelection;
