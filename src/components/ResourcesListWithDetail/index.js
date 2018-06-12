import React from 'react';
import ResourcePreview from '../ResourcePreview';
import ResourceDetail from '../ResourceDetail';
import Modal from '../Modal';
import Button from '../Button';
import Spinner from '../Spinner';
import {
  arrayOf,
  shape,
  string,
  func,
  object,
  bool
} from 'prop-types';
import styled from 'styled-components';
import { queryList } from '../../config/breakpoints';
import { base, items, item, actions } from './style';
import QueryHandler from '../QueryHandler';

const BaseStyle = styled.div`${base}`;
const ItemsStyle = styled.div`${items}`;
const ItemStyle = styled.div`${item}`;
const ActionsStyle = styled.div`${actions}`;

class ResourcesListWithDetail extends React.Component {

    static propTypes = {
      breakpointsStatus: object,
      breaks: object,
      dateType: string,
      generateDetailUrl: func,
      handleDetailView: func,
      navigateToDetail: func,
      navigateToSection: func,
      navigateToTopic: func,
      resources: arrayOf(shape(ResourcePreview.propTypes)).isRequired,
      showAllAction: shape({
        onClick: func.isRequired
      }),
      showSimpleItems: bool,
    };

    static defaultProps = {
      breakpointsStatus: {}
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
      resources,
      handleDetailView
    } = this.props;
    const currentResource = resources.find(e => e.reference === reference);
    if (handleDetailView) {
      handleDetailView({ resource: currentResource });
    }
    this.setState({ showDetailModal: true, currentResource });
  };

  handleNavigateTo = link => () => window.open(link, '_blank');

  closeDetailModal = () => this.setState({ showDetailModal: false, currentResource: null });

  // @TODO: make it as utility
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
      breakpointsStatus,
      resources,
      dateType,
      navigateToSection,
      navigateToTopic,
      showAllAction,
      navigateToDetail,
      generateDetailUrl,
      showSimpleItems,
      ...others
    } = this.props;

    const {
      showDetailModal,
      currentResource
    } = this.state;

    const count = resources.length;


    const currentBreakpoint = this.getCurrentBreakPoint(breakpointsStatus);
    const showedResources = this.getShowedResources({ currentBreakpoint });
    // const loading = Object.keys(breakpointsStatus).length === 0;

    return (
      <BaseStyle
        {...others}
      >
        {/* loading && <Spinner position="absolute" /> */}
        <div>
          <ItemsStyle
            breakpointsStatus={breakpointsStatus}
          >
            {
              showedResources.map(resource => {
                return (
                  <ItemStyle
                    breakpointsStatus={breakpointsStatus}
                    count={count}
                    key={resource.slug}
                  >
                    <ResourcePreview
                      {...resource}
                      dateType={dateType}
                      generateDetailUrl={generateDetailUrl}
                      handleDetailView={this.onHandleDetailView}
                      hideFooter={showSimpleItems}
                      navigateToDetail={navigateToDetail}
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
                skin="outline"
              />
            </ActionsStyle>
          }
          {
            (showAllAction && resources.length === showedResources.length) &&
            <ActionsStyle>
              <Button
                expanded={currentBreakpoint === 'XS'}
                href={showAllAction.href}
                label="Show All"
                onClick={showAllAction.onClick}
                skin="outline"
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
        </div>
      </BaseStyle>
    );
  }
}

export default QueryHandler(ResourcesListWithDetail);
