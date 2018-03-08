import React from 'react';
import styled from 'styled-components';
import m from 'moment';
import { getBaseUrl } from '../../utils';
import { SquareFilledPillIcon, LinkIcon } from '../Icon/icons/basic';
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
const SourceStyle = styled.div`${source}`;
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
  createdAt,
  typeLabel,
  handleDetailView
}) {
  return (
    <BaseStyle>
      <MainInfoStyle href={link}>
        <SourceStyle>
          <LinkIcon size={14} />
          <span>{getBaseUrl(link)}</span>
        </SourceStyle>
        <TitleStyle>{title}</TitleStyle>
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
        <DateStyle>{m(createdAt).fromNow()}</DateStyle>
      </SecondaryInfoStyle>
    </BaseStyle>
  );
}

ResourcePreview.propTypes = {
  author: string,
  color: string.isRequired,
  link: string.isRequired,
  createdAt: string,
  title: string.isRequired,
  typeLabel: string.isRequired
};

export default ResourcePreview;
