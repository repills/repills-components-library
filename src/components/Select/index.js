import React from 'react';
import {
  string,
  bool,
  any,
  arrayOf,
  func,
  oneOf,
  number,
  shape
} from 'prop-types';
import styled from 'styled-components';
import { CheckIcon } from '../Icon/icons/basic';
import {
  base,
  selected,
  selectedText,
  list,
  item,
  itemText,
  checkIcon
} from './style';

// Styled block
const BaseStyle = styled.div`${base}`;
const SelectedStyle = styled.div`${selected}`;
const SelectedTextStyle = styled.div`${selectedText}`;
const ListStyle = styled.div`${list}`;
const ItemStyle = styled.div`${item}`;
const ItemTextStyle = styled.div`${itemText}`;
const CheckIconStyle = styled.div`${checkIcon}`;

class Select extends React.Component {

  static propTypes = {
    disabled: bool,
    expanded: bool,
    handleOnChange: func.isRequired,
    id: string,
    options: arrayOf(shape({
      label: string.isRequired,
      value: any.isRequired,
      disabled: bool
    })).isRequired,
    placeholder: string,
    selectedIndex: number,
    size: oneOf(['M', 'L'])
  };

  static defaultProps = {
    size: 'M',
    selectedIndex: null
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: this.props.selectedIndex,
      open: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedIndex !== nextProps.selectedIndex) {
      this.setState({ selectedIndex: nextProps.selectedIndex });
    }
  }

  handleOnChange = ({ index, disabled }) => () => {

    if (disabled) {
      return;
    }

    const {
      handleOnChange,
      options
    } = this.props;

    this.setState({ selectedIndex: index, open: false });
    handleOnChange({ value: options[index].value, index });
  };

  handleOpen = () => {
    if (this.props.disabled) {
      return;
    }

    this.setState(state => ({ open: !state.open }));
  };

  render() {

    const {
      disabled,
      expanded,
      id,
      options,
      placeholder,
      size
    } = this.props;

    const {
      selectedIndex,
      open
    } = this.state;

    const isFilled = selectedIndex !== null && selectedIndex !== undefined;

    const currentSelectionLabel = isFilled
      ? options[selectedIndex].label
      : <span>{(placeholder && placeholder.length !== 0) ? placeholder : 'Select...'}</span>;

    return (
      <BaseStyle
        disabled={disabled}
        expanded={expanded}
        id={id}
        size={size}
      >
        {
          <SelectedStyle
            disabled={disabled}
            filled={isFilled}
            onClick={this.handleOpen}
            open={open}
            size={size}
          >
            <SelectedTextStyle>
              {currentSelectionLabel}
            </SelectedTextStyle>
          </SelectedStyle>
        }
        {
          (!disabled && open) &&
          <ListStyle
            count={options.length}
            size={size}
          >
            {
              options.map((item, index) => (
                <ItemStyle
                  disabled={item.disabled}
                  key={`option-${index}`}
                  onClick={this.handleOnChange({ index, disabled: item.disabled })}
                  size={size}
                  title={item.label}
                >
                  <ItemTextStyle>
                    {item.label}
                  </ItemTextStyle>
                  {
                    index === selectedIndex &&
                    <CheckIconStyle>
                      <CheckIcon
                        size={size === 'M' ? 16 : 20}
                      />
                    </CheckIconStyle>
                  }
                </ItemStyle>
              ))
            }
          </ListStyle>
        }
      </BaseStyle>
    );
  }
}

export default Select;
