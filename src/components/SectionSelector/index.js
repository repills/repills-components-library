import React from 'react';
import {
  number,
  func,
  shape,
  arrayOf,
  object
} from 'prop-types';
import styled from 'styled-components';
import SectionPreviewSelection from '../SectionPreviewSelection';
import ConsumeContainerQuery from '../../hoc/consume-container-query';
import {
  base,
  items,
  item
} from './style';

const BaseStyle = styled.div`${base}`;
const ItemsStyle = styled.div`${items}`;
const ItemStyle = styled.div`${item}`;

class SectionSelector extends React.Component {

  static propTypes = {
    breakpointsStatus: object,
    handleOnChange: func,
    sections: arrayOf(shape(SectionPreviewSelection.propTypes)).isRequired,
    selected: number
  };

  static defaultProps = {
    breakpointsStatus: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.state.selected) {
      this.setState({ selected: nextProps.selected });
    }
  }

  handleOnChange = index => () => this.setState(state => {
    const { handleOnChange } = this.props;
    const _index = index === this.state.selected ? null : index;
    const update = { selected: _index };
    if (typeof handleOnChange === 'function') {
      handleOnChange(update);
    }
    return update;
  });

  render() {
    const {
      breakpointsStatus,
      sections,
      ...others
    } = this.props;

    const {
      selected
    } = this.state;

    const count = sections.length;

    return (
      <BaseStyle
        {...others}
      >
        <ItemsStyle breakpointsStatus={breakpointsStatus}>
          {
            sections.map((section, index) => (
              <ItemStyle
                breakpointsStatus={breakpointsStatus}
                count={count}
                key={section.id}
              >
                <SectionPreviewSelection
                  checked={index === selected}
                  handleOnChange={this.handleOnChange(index)}
                  {...section}
                />
              </ItemStyle>
            ))
          }
        </ItemsStyle>
      </BaseStyle>
    );
  }
}

export default ConsumeContainerQuery(SectionSelector);
