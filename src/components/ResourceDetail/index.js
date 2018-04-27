import React from 'react';
import styled from 'styled-components';
import m from 'moment';
import { getBaseUrl } from '../../utils';
import { SquareFilledPillIcon, LinkIcon } from '../Icon/icons/basic';
import { sections as sectionsConfig } from 'repills-config';
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
  navigateToTopic,
  generateTopicUrl,
  generateSectionUrl,
  ...others
}) {

  const sectionsMerged = sections.reduce((acc,sectionId) => {
    const section = sectionsConfig.find(s => s.id === sectionId);
    return { ...acc, ...section.topics };
  },{});

  return (
    <BaseStyle
      {...others}
      color={color}
    >
      <MainInfoStyle>
        <MainInfoTopStyle>
          <TypeStyle
            color={color}
          >
            <SquareFilledPillIcon
              color={color}
              size={16}
            />
            <span>{typeLabel}</span>
          </TypeStyle>
          <SourceStyle>
            <LinkIcon size={18} />
            <span>{getBaseUrl(link)}</span>
          </SourceStyle>
        </MainInfoTopStyle>
        <TitleStyle onClick={navigateTo}>{title}</TitleStyle>
        <MainInfoBottomStyle>
          {
            author &&
            <AuthorStyle>
              by <span>{author}</span>
            </AuthorStyle>
          }
          {
            publishedAt &&
            <DateStyle>
              &ndash;<span>Published <strong>{m(publishedAt).fromNow()}</strong></span>
            </DateStyle>
          }
        </MainInfoBottomStyle>
      </MainInfoStyle>
      <SecondaryInfoStyle>
        {
          (suggestedBy && suggestedBy !== '') &&
          <DetailStyle>
            <strong>Suggested by</strong>
            <a
              href={`https://github.com/${suggestedBy}`}
              rel="nofollow"
              target="blank"
            >{suggestedBy}</a>
          </DetailStyle>
        }
        <DetailStyle>
          <strong>Section{sections.length !== 1 ? 's' : ''}</strong>
          {
            sections.map(sectionId => {
              const section = sectionsConfig.find(s => s.id === sectionId);
              return (
                <a
                  href={generateSectionUrl && generateSectionUrl(section.slug)}
                  key={section.slug}
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigateToSection(section.slug);
                  }}
                >
                  {section.name}
                </a>
              );
            })
          }
        </DetailStyle>
        <DetailStyle>
          <strong>Topic{topics.length !== 1 ? 's' : ''}</strong>
          {
            topics.map(topicId => {
              const topic = sectionsMerged[topicId];
              return (
                <a
                  href={generateTopicUrl && generateTopicUrl(topic.slug)}
                  key={topic.slug}
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigateToTopic(topic.slug);
                  }}
                >
                  {topic.title}
                </a>
              );
            })
          }
        </DetailStyle>
      </SecondaryInfoStyle>
      <ActionsStyle>
        {
          /*
           @TODO

           <Button
           autoWidth
           label="Edit"
           onClick={() => {}}
           size="S"
           skin="ghost"
           />
          */
        }
        <Button
          label={`Go to ${typeLabel}`}
          onClick={navigateTo}
          size="S"
          skin="primary"
        />
      </ActionsStyle>
    </BaseStyle>
  );
}

ResourceDetail.propTypes = {
  author: string,
  color: string,
  createdAt: string,
  generateSectionUrl: func,
  generateTopicUrl: func,
  link: string.isRequired,
  navigateTo: func,
  navigateToSection: func,
  navigateToTopic: func,
  publishedAt: string,
  sections: arrayOf(string),
  suggestedBy: arrayOf(string),
  title: string.isRequired,
  topics: arrayOf(string),
  typeLabel: string
};

export default ResourceDetail;
