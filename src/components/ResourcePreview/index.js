import React from 'react';
import styled from 'styled-components';
import m from 'moment';
import { getBaseUrl } from '../../utils';
import { SquareFilledPillIcon, LinkIcon } from '../Icon/icons/basic';
import {
  string,
  func
} from 'prop-types';
import {
  base,
  mainInfo,
  source,
  title,
  type,
  date,
  detail,
  secondaryInfo,
  author
} from './style';

const BaseStyle = styled.article`${base}`;
const MainInfoStyle = styled.div`${mainInfo}`;
const SecondaryInfoStyle = styled.div`${secondaryInfo}`;
const SourceStyle = styled.a`${source}`;
const TitleStyle = styled.h4`${title}`;
const AuthorStyle = styled.div`${author}`;
const TypeStyle = styled.div`${type}`;
const DateStyle = styled.div`${date}`;
const DetailStyle = styled.div`${detail}`;


class ResourcePreview extends React.Component {

  static propTypes = {
    author: string,
    color: string.isRequired,
    createdAt: string,
    dateType: string,
    generateDetailUrl: func,
    handleDetailView: func,
    link: string.isRequired,
    navigateToDetail: func,
    publishedAt: string,
    reference: string,
    slug: string,
    title: string.isRequired,
    typeLabel: string.isRequired
  };

  static defaultProps = {
    dateType: 'createdAt'
  };

  handleDetailView = () => {
    const {
      handleDetailView,
      reference
    } = this.props;
    handleDetailView({ reference: reference });
  };

  handleNavigateToDetailPage= e => {
    e.preventDefault();
    e.stopPropagation();
    const {
      slug,
      publishedAt,
      navigateToDetail
    } = this.props;
    navigateToDetail({ slug, publishedAt });
  };

  render() {

    const {
      color,
      title,
      author,
      link,
      createdAt,
      publishedAt,
      dateType,
      slug,
      generateDetailUrl,
      navigateToDetail,
      typeLabel,
      ...others
    } = this.props;

    return (
      <BaseStyle
        {...others}
      >
        <MainInfoStyle
          onClick={this.handleDetailView}
        >
          <TitleStyle>
            {title}
          </TitleStyle>
          <DetailStyle>
            <TypeStyle color={color}>
              <SquareFilledPillIcon
                color={color}
                size={16}
              />
              <span>{typeLabel}</span>
            </TypeStyle>
            &ndash;
            {author && <AuthorStyle>by <span>{author}</span></AuthorStyle>}
          </DetailStyle>
        </MainInfoStyle>
        <SecondaryInfoStyle>
          <SourceStyle
            href={link}
            rel="nofollow"
            target="_blank"
          >
            <LinkIcon size={16} />
            <span>{getBaseUrl(link)}</span>
          </SourceStyle>
          {
            (dateType === 'createdAt' && createdAt) &&
              <DateStyle>
                <a
                  href={generateDetailUrl && generateDetailUrl({ slug, publishedAt })}
                  onClick={navigateToDetail && this.handleNavigateToDetailPage}
                >
                  {m(createdAt).fromNow()}
                </a>
              </DateStyle>
          }
          {
            (dateType === 'publishedAt' && publishedAt) &&
            <DateStyle>
              <a
                href={generateDetailUrl && generateDetailUrl({ slug, publishedAt })}
                onClick={navigateToDetail && this.handleNavigateToDetailPage}
              >
                {m(publishedAt).fromNow()}
              </a>
            </DateStyle>
          }
        </SecondaryInfoStyle>
      </BaseStyle>
    );
  }

}

export default ResourcePreview;
