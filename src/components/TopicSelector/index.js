import React from 'react';
import {
  func,
  arrayOf,
  string,
  object
} from 'prop-types';
import styled from 'styled-components';
import TopicPreviewSelection from '../TopicPreviewSelection/index';
import cx from 'classnames';
import { ContainerQuery } from 'react-container-query';
import { query } from '../../config/breakpoints';

import {
  base,
  items,
  item,
  selectedMessage
} from './style';

const BaseStyle = styled.div`${base}`;
const ItemsStyle = styled.div`${items}`;
const ItemStyle = styled.div`${item}`;
const SelectedMessageStyle = styled.p`${selectedMessage}`;

class TopicSelector extends React.Component {

  static propTypes = {
    handleOnChange: func,
    selected: arrayOf(string),
    topics: object.isRequired
  };

  static defaultProps = {
    selected: []
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: this.transformSelectedToObject(this.props.selected)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.state.selected) {
      const selected = this.transformSelectedToObject(nextProps.selected);
      this.setState({ selected });
    }
  }

  transformSelectedToObject = selected => selected.reduce((acc,e) => {
    acc[e] = true;
    return acc;
  }, {});

  handleOnChange = id => () => this.setState(state => {
    state.selected[id] = !state.selected[id];
    const result = Object.entries(state.selected).filter(e => e[1]).map(([key, value]) => key);
    this.props.handleOnChange({ selected: result });
    return state;
  });
  
  isChecked = id => {
    const {
      selected
    } = this.state;

    return selected && selected[id];
  };

  render() {
    const {
      topics,
      ...others
    } = this.props;

    const {
      selected
    } = this.state;

    const selectedCount = Object.keys(selected).length;

    return (
      <ContainerQuery query={query}>
        {
          params => (
            <BaseStyle
              {...others}
            >
              <ItemsStyle className={cx(params)}>
                {
                  Object.entries(topics).map(([key, topic], index) => (
                    <ItemStyle
                      className={cx(params)}
                      key={topic.slug}
                    >
                      <TopicPreviewSelection
                        checked={this.isChecked(key)}
                        handleOnChange={this.handleOnChange(key)}
                        {...topic}
                      />
                    </ItemStyle>
                  ))
                }
              </ItemsStyle>
              {
                selectedCount > 0 &&
                <SelectedMessageStyle>
                  Selected {selectedCount} topic{selectedCount === 1 ? '' : 's'}
                </SelectedMessageStyle>
              }
            </BaseStyle>
          )
        }
      </ContainerQuery>
    );
  }
}

export default TopicSelector;
