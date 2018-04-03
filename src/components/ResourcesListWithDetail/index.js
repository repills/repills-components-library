import React from 'react';
import ResourcePreview from '../ResourcePreview';
import ResourceDetail from '../ResourceDetail';
import Modal from '../Modal';
import Button from '../Button';
import {
  arrayOf,
  shape,
  string,
  func,
  object
} from 'prop-types';
import styled from 'styled-components';
import { ContainerQuery } from 'react-container-query';
import { query, queryList } from '../../config/breakpoints';
import { base, items, item, actions } from './style';

const BaseStyle = styled.div`${base}`;
const ItemsStyle = styled.div`${items}`;
const ItemStyle = styled.div`${item}`;
const ActionsStyle = styled.div`${actions}`;

class ResourcesListWithDetail extends React.Component {

    static propTypes = {
      breaks: object,
      dateType: string,yar
      handleDetailView: func,
      navigateToSection: func,
      navigateToTopic: func,
      resources: arrayOf(shape(ResourcePreview.propTypes)).isRequired,
      showAllAction: shape({
        onClick: func.isRequired
      }),
    };

    constructor(props) {
      super(props);
      this.state = {
        showDetailModal: false,
        currentResource: null,
        showEntireList: false
      };
    }

  onHandleDetailView = ({ reference }) => {
    const {
      resources
    } = this.props;
    const currentResource = resources.find(e => e.reference === reference);
    this.setState({ showDetailModal: true, currentResource });
  };

  handleNavigateTo = link => () => window.open(link, '_blank');

  closeDetailModal = () => this.setState({ showDetailModal: false, currentResource: null });

  getCurrentBreakPoint = statusBreakpoints => {
    let current = null;

    queryList.forEach(b => {
      if (statusBreakpoints[b]) {
        current = b;
      }
    });

    return current;
  };

  getShowedResources = ({ currentBreakpoint }) => {
    const {
      breaks,
      resources
    } = this.props;

    const {
      showEntireList
    } = this.state;

    if (breaks && !showEntireList) {
      if (currentBreakpoint && breaks[currentBreakpoint]) {
        return resources.slice(0, breaks[currentBreakpoint]);
      }
    }

    return resources;
  };

  render() {

    const {
      resources,
      dateType,
      navigateToSection,
      navigateToTopic,
      showAllAction,
      ...others
    } = this.props;

    const {
      showDetailModal,
      currentResource
    } = this.state;

    const count = resources.length;

    return (
      <ContainerQuery query={query}>
        {
          params => {
            const currentBreakpoint = this.getCurrentBreakPoint(params);
            const showedResources = this.getShowedResources({ currentBreakpoint });

            return (
              <BaseStyle
                {...others}
              >
                {Object.keys(params).length > 0} &&
                <ItemsStyle
                  breakpointsStatus={params}
                >
                  {
                    showedResources.map(resource => {
                      return (
                        <ItemStyle
                          breakpointsStatus={params}
                          count={count}
                          key={resource.link}
                        >
                          <ResourcePreview
                            {...resource}
                            dateType={dateType}
                            handleDetailView={this.onHandleDetailView}
                          />
                        </ItemStyle>
                      );
                    })
                  }
                </ItemsStyle>
                {
                  resources.length > showedResources.length &&
                  <ActionsStyle>
                    <Button
                      expanded={currentBreakpoint === 'XS'}
                      label="Show more"
                      onClick={() => this.setState({ showEntireList: true })}
                    />
                  </ActionsStyle>
                }
                {
                  (showAllAction && resources.length === showedResources.length) &&
                  <ActionsStyle>
                    <Button
                      expanded={currentBreakpoint === 'XS'}
                      label="Show All"
                      onClick={showAllAction.onClick}
                    />
                  </ActionsStyle>
                }
                <Modal
                  handleClose={this.closeDetailModal}
                  open={showDetailModal}
                >
                  {
                    currentResource ?
                      <ResourceDetail
                        {...currentResource}
                        navigateTo={this.handleNavigateTo(currentResource.link)}
                        navigateToSection={navigateToSection}
                        navigateToTopic={navigateToTopic}
                      />
                      : <div />
                  }
                </Modal>
              </BaseStyle>
            );
          }
        }
      </ContainerQuery>
    );
  }
}

export default ResourcesListWithDetail;
