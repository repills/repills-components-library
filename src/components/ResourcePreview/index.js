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
    handleDetailView: func,
    link: string.isRequired,
    publishedAt: string,
    reference: string,
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

  render() {

    const {
      color,
      title,
      author,
      link,
      createdAt,
      publishedAt,
      dateType,
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
            <TypeStyle>
              <SquareFilledPillIcon
                color={color}
                size={16}
              />
              <span>{typeLabel}</span>
            </TypeStyle>
            &mdash;
            {author && <AuthorStyle>by <span>{author}</span></AuthorStyle>}
          </DetailStyle>
        </MainInfoStyle>
        <SecondaryInfoStyle>
          <SourceStyle
            href={link}
            target="_blank"
          >
            <LinkIcon size={16} />
            <span>{getBaseUrl(link)}</span>
          </SourceStyle>
          {
            dateType === 'createdAt' &&
              <DateStyle>
                {m(createdAt).fromNow()}
              </DateStyle>
          }
          {
            dateType === 'publishedAt' &&
            <DateStyle>
              {m(publishedAt).fromNow()}
            </DateStyle>
          }
        </SecondaryInfoStyle>
      </BaseStyle>
    );
  }

}

export default ResourcePreview;
