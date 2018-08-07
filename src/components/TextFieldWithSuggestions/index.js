import React from 'react';
import {
  string,
  arrayOf,
  func
} from 'prop-types';
import styled from 'styled-components';
import TextField from '../TextField';
import {
  base,
  list,
  item
} from './style';

const BaseStyle = styled.div`${base}`;
const ListStyle = styled.div`${list}`;
const ItemStyle = styled.div`${item}`;

class TextFieldWithSuggestions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      dirty: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.value !== nextProps.value) {
      this.setState({ value: nextProps.value });
    }
  }

  onHandleOnChange = ({ value, dirty }) => {
    this.setState({ value, dirty });
    this.props.handleOnChange({ value, dirty });
  };

  onItemClick = value => () => this.onHandleOnChange({ value, dirty: true });

  render() {

    const {
      suggestions,
      ...others
    } = this.props;

    const {
      value,
      dirty
    } = this.state;

    return (
      <BaseStyle>
        <TextField
          {...others}
          expanded
          handleOnChange={this.onHandleOnChange}
          value={value}
        />
        {
          ((!dirty || value === '') && suggestions.length > 0) &&
          <ListStyle>
            {
              suggestions.map((s, i) => (
                s !== value &&
                <ItemStyle
                  key={`s-${i}`}
                  onClick={this.onItemClick(s)}
                >
                  {s}
                </ItemStyle>
              ))
            }
          </ListStyle>
        }
      </BaseStyle>
    );
  };
}

TextFieldWithSuggestions.displayName = 'TextFieldWithSuggestions';

TextFieldWithSuggestions.propTypes = {
  handleOnChange: func,
  suggestions: arrayOf(string),
  value: string,

};

export default TextFieldWithSuggestions;
