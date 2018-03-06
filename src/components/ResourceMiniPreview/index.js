import React from 'react';
import styled from 'styled-components';
import { SquareFilledPillIcon } from '../Icon/icons/basic';
import {
  string
} from 'prop-types';
import {
  base,
  mainInfo,
  title,
  type,
  detail,
  author
} from './style';

const BaseStyle = styled.article`${base}`;
const MainInfoStyle = styled.a`${mainInfo}`;
const TitleStyle = styled.h4`${title}`;
const AuthorStyle = styled.div`${author}`;
const TypeStyle = styled.div`${type}`;
const DetailStyle = styled.div`${detail}`;

function ResourcePreview({
  color,
  title,
  author,
  link,
  typeLabel,
  handleDetailView
}) {
  return (
    <BaseStyle>
      <MainInfoStyle href={link}>
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
    </BaseStyle>
  );
}

ResourcePreview.propTypes = {
  author: string,
  color: string.isRequired,
  link: string.isRequired,
  title: string.isRequired,
  typeLabel: string.isRequired
};

export default ResourcePreview;
