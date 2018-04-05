import React from 'react';
import TopicPreview from '../TopicPreview';
import {
  func,
  arrayOf,
  shape,
  obj
} from 'prop-types';
import styled from 'styled-components';
import { ContainerQuery } from 'react-container-query';
import Button from '../Button';
import { query, queryList } from '../../config/breakpoints';
import { base, items, item, actions } from './style';
import Spinner from '../Spinner';

const BaseStyle = styled.div`${base}`;
const ItemsStyle = styled.div`${items}`;
const ItemStyle = styled.div`${item}`;
const ActionsStyle = styled.div`${actions}`;

class TopicsList extends React.Component {

  static propTypes = {
    breaks: obj,
    navigateTo: func,
    showAllAction: shape({
      onClick: func.isRequired
    }),
    topics: arrayOf(shape(TopicPreview.propTypes)).isRequired,
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
      topics,
      navigateTo,
      showAllAction,
      ...others
    } = this.props;

    const count = topics.length;
    return (
      <ContainerQuery query={query}>
        {
          params => {
            const currentBreakpoint = this.getCurrentBreakPoint(params);
            const showedTopics = this.getShowedTopics({ currentBreakpoint });
            const loading = Object.keys(params).length === 0;

            return (
              <BaseStyle
                {...others}
              >
                { loading && <Spinner position="absolute" /> }
                <div>
                  <ItemsStyle
                    breakpointsStatus={params}
                  >
                    {
                      showedTopics.map(topic => (
                        <ItemStyle
                          breakpointsStatus={params}
                          count={count}
                          key={topic.slug}
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
      </ContainerQuery>
    );

  }
}

TopicsList.propTypes = {
  navigateTo: func,
  topics: arrayOf(shape(TopicPreview.propTypes)).isRequired
};

export default TopicsList;
