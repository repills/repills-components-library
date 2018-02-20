import React from 'react';
import styled from 'styled-components';
import m from 'moment';
import { getBaseUrl } from '../../utils';
import { PillIcon, LinkIcon } from '../Icon/icons/basic';
import {
  string
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
const MainInfoStyle = styled.a`${mainInfo}`;
const SecondaryInfoStyle = styled.div`${secondaryInfo}`;
const SourceStyle = styled.article`${source}`;
const TitleStyle = styled.h4`${title}`;
const AuthorStyle = styled.div`${author}`;
const TypeStyle = styled.div`${type}`;
const DateStyle = styled.div`${date}`;
const DetailStyle = styled.div`${detail}`;

function ResourcePreview({
  color,
  title,
  author,
  link,
  date,
  typeLabel,
  handleDetailView
}) {
  return (
    <BaseStyle
      color={color}
    >
      <MainInfoStyle href={link}>
        <SourceStyle>
          <LinkIcon size={14} />
          <span>{getBaseUrl(link)}</span>
        </SourceStyle>
        <TitleStyle>{title}</TitleStyle>
        <DetailStyle>
          <TypeStyle>
            <PillIcon
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
        <DateStyle>Published {m(date).fromNow()}</DateStyle>
      </SecondaryInfoStyle>
    </BaseStyle>
  );
}

ResourcePreview.propTypes = {
  author: string,
  color: string.isRequired,
  date: string,
  link: string.isRequired,
  title: string.isRequired,
  typeLabel: string.isRequired
};

export default ResourcePreview;
