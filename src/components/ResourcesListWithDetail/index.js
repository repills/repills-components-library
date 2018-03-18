import React from 'react';
import ResourcePreview from '../ResourcePreview';
import ResourceDetail from '../ResourceDetail';
import Modal from '../Modal';
import cx from 'classnames';
import {
  arrayOf,
  shape,
  string,
  func
} from 'prop-types';
import styled from 'styled-components';
import { ContainerQuery } from 'react-container-query';
import { query } from '../../config/breakpoints';
import { base, items, item } from './style';

const BaseStyle = styled.div`${base}`;
const ItemsStyle = styled.div`${items}`;
const ItemStyle = styled.div`${item}`;

class ResourcesListWithDetail extends React.Component {

  static propTypes = {
    dateType: string,
    handleDetailView: func,
    navigateToSection: func,
    navigateToTopic: func,
    resources: arrayOf(shape(ResourcePreview.propTypes)).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      showDetailModal: false,
      currentResource: null
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

  render() {

    const {
      resources,
      dateType,
      navigateToSection,
      navigateToTopic,
      ...others
    } = this.props;

    const {
      showDetailModal,
      currentResource
    } = this.state;

    return (
      <ContainerQuery query={query}>
        {
          params => (
            <BaseStyle
              {...others}
            >
              <ItemsStyle className={cx(params)}>
                {
                  resources.map(resource => {
                    return (
                      <ItemStyle
                        className={cx(params)}
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
          )
        }
      </ContainerQuery>
    );
  }
}

export default ResourcesListWithDetail;
