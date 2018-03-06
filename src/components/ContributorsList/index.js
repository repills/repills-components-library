import React from 'react';
import {
  arrayOf,
  shape,
  number,
  string
} from 'prop-types';
import styled from 'styled-components';
import { UserIcon } from '../Icon/icons/basic';
import {
  base,
  title,
  items,
  item
} from './style';

const BaseStyle = styled.div`${base}`;
const TitleStyle = styled.h3`${title}`;
const ItemsStyle = styled.div`${items}`;
const ItemStyle = styled.a`${item}`;

const ContributorsList = ({
  title,
  contributors
}) => {

  return (
    contributors.length > 1 &&
    <BaseStyle>
      <TitleStyle>{title ? title : 'Contributions'}</TitleStyle>
      <ItemsStyle>
        {
          contributors.sort((a,b) => a.publishedCount < b.publishedCount).map(c => (
            <ItemStyle
              href={`https://github.com/${c.nickname}`}
              target="_blank"
            >
              <UserIcon
                size={20}
              />
              <span>{c.nickname}</span>
              {
                c.publishedCount &&
                <div>(<strong>{c.publishedCount}</strong>)</div>
              }
            </ItemStyle>
          ))
        }
      </ItemsStyle>
    </BaseStyle>
  );
};

ContributorsList.propTypes = {
  contributors: arrayOf(shape({
    nickname: string.isRequired,
    publishedCount: number
  })),
  title: string
};

ContributorsList.defaultProps = {
};

export default ContributorsList;
