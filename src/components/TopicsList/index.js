import React from 'react';
import TopicPreview from '../TopicPreview';
import {
  func,
  arrayOf,
  shape,
  object
} from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
import { queryList } from '../../config/breakpoints';
import { base, items, item, actions } from './style';
import QueryHandler from '../QueryHandler';

const BaseStyle = styled.div`${base}`;
const ItemsStyle = styled.div`${items}`;
const ItemStyle = styled.div`${item}`;
const ActionsStyle = styled.div`${actions}`;

class TopicsList extends React.Component {

  static propTypes = {
    breakpointsStatus: object,
    breaks: object,
    navigateTo: func,
    showAllAction: shape({
      onClick: func.isRequired
    }),
    topics: arrayOf(shape(TopicPreview.propTypes)).isRequired,
  };

  static defaultProps = {
    breakpointsStatus: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      showEntireList: false
    };
  }

  getCurrentBreakPoint = statusBreakpoints => {
    let current = null;

    queryList.forEach(b => {
      if (statusBreakpoints[b]) {
        current = b;
      }
    });

    return current;
  };

  getShowedTopics = ({ currentBreakpoint }) => {
    const {
      breaks,
      topics
    } = this.props;

    const {
      showEntireList
    } = this.state;

    if (breaks && !showEntireList) {
      if (currentBreakpoint && breaks[currentBreakpoint]) {
        return topics.slice(0, breaks[currentBreakpoint]);
      }
    }

    return topics;
  };

  render() {
    const {
      breakpointsStatus,
      topics,
      navigateTo,
      showAllAction,
      ...others
    } = this.props;

    const count = topics.length;
    const currentBreakpoint = this.getCurrentBreakPoint(breakpointsStatus);
    const showedTopics = this.getShowedTopics({ currentBreakpoint });

    return (
      <BaseStyle
        {...others}
      >
        <div>
          <ItemsStyle
            breakpointsStatus={breakpointsStatus}
          >
            {
              showedTopics.map((topic,i) => (
                <ItemStyle
                  breakpointsStatus={breakpointsStatus}
                  count={count}
                  key={`${topic.slug}-${i}`}
                >
                  <TopicPreview
                    navigateTo={() => navigateTo(topic.path)}
                    {...topic}
                  />
                </ItemStyle>
              ))
            }
          </ItemsStyle>
          {
            topics.length > showedTopics.length &&
            <ActionsStyle>
              <Button
                expanded={currentBreakpoint === 'XS'}
                label="Show more"
                onClick={() => this.setState({ showEntireList: true })}
              />
            </ActionsStyle>
          }
          {
            (showAllAction && topics.length === showedTopics.length) &&
            <ActionsStyle>
              <Button
                expanded={currentBreakpoint === 'XS'}
                label="Show All"
                onClick={showAllAction.onClick}
              />
            </ActionsStyle>
          }
        </div>
      </BaseStyle>
    );

  }
}

export default QueryHandler(TopicsList);
