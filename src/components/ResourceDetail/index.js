import React from 'react';
import styled from 'styled-components';
import m from 'moment';
import { getBaseUrl } from '../../utils';
import { SquareFilledPillIcon, LinkIcon } from '../Icon/icons/basic';
import Button from '../Button';
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
  mainInfoTop,
  mainInfoBottom,
  date,
  secondaryInfo,
  actions,
  detail,
  author
} from './style';

const BaseStyle = styled.article`${base}`;
const MainInfoStyle = styled.div`${mainInfo}`;
const MainInfoTopStyle = styled.div`${mainInfoTop}`;
const MainInfoBottomStyle = styled.div`${mainInfoBottom}`;
const SecondaryInfoStyle = styled.div`${secondaryInfo}`;
const SourceStyle = styled.article`${source}`;
const TitleStyle = styled.h4`${title}`;
const AuthorStyle = styled.span`${author}`;
const TypeStyle = styled.div`${type}`;
const ActionsStyle = styled.div`${actions}`;
const DateStyle = styled.div`${date}`;
const DetailStyle = styled.div`${detail}`;

function ResourceDetail({
  color,
  title,
  author,
  link,
  createdAt,
  publishedAt,
  sections,
  topics,
  typeLabel,
  navigateTo,
  suggestedBy,
  navigateToSection,
  navigateToTopic
}) {

  return (
    <BaseStyle
      color={color}
    >
      <MainInfoStyle>
        <MainInfoTopStyle>
          <TypeStyle>
            <SquareFilledPillIcon
              color={color}
              size={16}
            />
            <span>{typeLabel}</span>
          </TypeStyle>
          <SourceStyle>
            <LinkIcon size={14} />
            <span>{getBaseUrl(link)}</span>
          </SourceStyle>
        </MainInfoTopStyle>
        <TitleStyle onClick={navigateTo}>{title}</TitleStyle>
        <MainInfoBottomStyle>
          {
            author &&
            <AuthorStyle>
              by <span>{author}</span> &mdash;
            </AuthorStyle>
          }
          <DateStyle>Published at: {m(publishedAt).fromNow()}</DateStyle>
          <DateStyle>Shared at: {m(createdAt).fromNow()}</DateStyle>
        </MainInfoBottomStyle>
      </MainInfoStyle>
      <SecondaryInfoStyle>
        {
          (suggestedBy && suggestedBy !== '') &&
          <DetailStyle>
            <strong>Suggested by</strong>
            <a
              href={`https://github.com/${suggestedBy}`}
              target="blank"
            >{suggestedBy}</a>
          </DetailStyle>
        }
        <DetailStyle>
          <strong>Section{topics.length > 1 ? 's' : ''}</strong>
          { sections.map(s =>
            <span
              key={s}
              onClick={() => navigateToSection(s)}
            >
              {s}
            </span>) }
        </DetailStyle>
        <DetailStyle>
          <strong>Topic{topics.length > 1 ? 's' : ''}</strong>
          { topics.map(t =>
            <span
              key={t}
              onClick={() => navigateToTopic(t)}
            >
              {t}
            </span>
          ) }
        </DetailStyle>
      </SecondaryInfoStyle>
      <ActionsStyle>
        <Button
          label={`Go to ${typeLabel}`}
          onClick={navigateTo}
          size="M"
        />
      </ActionsStyle>
    </BaseStyle>
  );
}

ResourceDetail.propTypes = {
  author: string,
  color: string,
  createdAt: string,
  link: string.isRequired,
  navigateTo: func,
  path: string.isRequired,
  publishedAt: string,
  sections: arrayOf(string),
  suggestedBy: string,
  title: string.isRequired,
  topics: arrayOf(string),
  type: string.isRequired,
  typeLabel: string
};

export default ResourceDetail;
