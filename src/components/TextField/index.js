import React from 'react';
import styled from 'styled-components';
import {
  string,
  bool,
  func,
  number,
  oneOf,
  oneOfType
} from 'prop-types';
import { CheckedIcon, ErrorIcon } from '../Icon/icons/basic';
import {
  base,
  icon,
  input
} from './style';

const BaseStyle = styled.div`${base}`;
const InputStyle = styled.input`${input}`;
const IconStyle = styled.div`${icon}`;

class TextField extends React.Component {

  static propTypes = {
    dirty: bool,
    disabled: bool,
    expanded: bool,
    handleOnBlur: func,
    handleOnChange: func,
    handleOnFocus: func,
    hasError: bool,
    name: string,
    placeholder: string,
    readOnly: bool,
    required: bool,
    size: oneOf(['M', 'L']),
    type: oneOf(['text', 'number', 'url', 'date', 'datetime']),
    value: oneOfType([string, number])
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      dirty: this.props.dirty || false
    };
  }

  componentWillReceiveProps(nextProps) {

    if (this.state.value !== nextProps.value) {
      this.setState({ value: nextProps.value });
    }

    if (this.state.dirty !== nextProps.dirty) {
      this.setState({ dirty: nextProps.dirty });
    }
  }

  handleOnChange = e => {
    const value = e.target.value;
    const update = { value, dirty: true };
    this.props.handleOnChange(update);
    this.setState(update);
  };

  render() {

    const {
      disabled,
      expanded,
      handleOnBlur,
      handleOnFocus,
      hasError,
      name,
      placeholder,
      readOnly,
      required,
      size,
      type,
      ...others
    } = this.props;

    const {
      dirty,
      value
    } = this.state;

    const hasIcon = dirty && typeof(hasError) === 'boolean';

    const iconSize = {
      M: 24,
      L: 28
    };

    return (
      <BaseStyle
        {...others}
        disabled={disabled}
        expanded={expanded}
        filled={value && value.length !== 0}
        hasError={hasError}
        size={size}
      >
        {
          hasIcon &&
          <IconStyle
            hasError={hasError}
            size={size}
          >
            { hasError ? <ErrorIcon size={iconSize[size]} /> : <CheckedIcon size={iconSize[size]} /> }
          </IconStyle>
        }
        <InputStyle
          disabled={disabled}
          hasIcon={hasIcon}
          name={name}
          onBlur={handleOnBlur}
          onChange={this.handleOnChange}
          onFocus={handleOnFocus}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          size={size}
          type={type}
          value={value}
        />
      </BaseStyle>
    );
  }
}

export default TextField;
