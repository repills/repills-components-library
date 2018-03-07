import React from 'react';
import {
  string,
  bool,
  func
} from 'prop-types';
import styled from 'styled-components';
import theme from '../../config/theme';
import { AddIcon, CheckedIcon } from '../Icon/icons/basic';
import {
  base,
  title,
  selectButton
} from './style';

const BaseStyle = styled.div`${base}`;
const NameStyle = styled.h3`${title}`;
const SelectionButtonStyle = styled.div`${selectButton}`;

class TopicPreviewSelection extends React.Component {

  static propTypes = {
    checked: bool,
    handleOnChange: func,
    title: string.isRequired
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
      title
    } = this.props;

    const {
      checked
    } = this.state;

    return (
      <BaseStyle
        checked={checked}
        onClick={this.handleOnChange}
      >
        <SelectionButtonStyle>
          {
            checked ?
              <CheckedIcon
                color={checked ? theme.palettes.status.ok : null}
                size={20}
              />
              : <AddIcon size={20} />
          }
          <NameStyle>{title}</NameStyle>
        </SelectionButtonStyle>
      </BaseStyle>
    );
  }
}

export default TopicPreviewSelection;
