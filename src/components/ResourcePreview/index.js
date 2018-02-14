import React from 'react';
import styled from 'styled-components';
import m from 'moment';
import { getBaseUrl } from '../../utils';
import { PillIcon, LinkIcon } from '../Icon/icons/basic';
import {
  string,
  arrayOf,
  func
} from 'prop-types';
import {
  base,
  mainInfo,
  source,
  title,
  type,
  date,
  secondaryInfo,
  author
} from './style';

const BaseStyle = styled.article`${base}`;
const MainInfoStyle = styled.div`${mainInfo}`;
const SecondaryInfoStyle = styled.div`${secondaryInfo}`;
const SourceStyle = styled.article`${source}`;
const TitleStyle = styled.h4`${title}`;
const AuthorStyle = styled.div`${author}`;
const TypeStyle = styled.div`${type}`;
const DateStyle = styled.div`${date}`;

function ResourcePreview({
  color,
  title,
  author,
  link,
  path,
  date,
  type,
  sections,
  topics,
  typeLabel,
  navigateTo,
  suggestedBy,
  handleDetailView
}) {
  return (
    <BaseStyle
      color={color}
      onClick={navigateTo}
    >
      <MainInfoStyle>
        <SourceStyle>
          <LinkIcon size={14} />
          <span>{getBaseUrl(link)}</span>
        </SourceStyle>
        <TitleStyle>{title}</TitleStyle>
        {author && <AuthorStyle>by <span>{author}</span></AuthorStyle>}
      </MainInfoStyle>
      <SecondaryInfoStyle>
        <TypeStyle>
          <PillIcon
            color={color}
            size={16}
          />
          <span>{typeLabel}</span>
        </TypeStyle>
        <DateStyle>{m(date).fromNow()}</DateStyle>
      </SecondaryInfoStyle>
    </BaseStyle>
  );
}

ResourcePreview.propTypes = {
  author: string,
  color: string,
  date: string,
  link: string.isRequired,
  navigateTo: func,
  path: string.isRequired,
  sections: arrayOf(string),
  suggestedBy: string,
  title: string.isRequired,
  topics: arrayOf(string),
  type: string.isRequired,
  typeLabel: string
};

export default ResourcePreview;
