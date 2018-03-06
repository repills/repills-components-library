import React from 'react';
import {
  arrayOf,
  shape,
  number,
  string
} from 'prop-types';
import styled from 'styled-components';
import { base } from './style';

const BaseStyle = styled.div`${base}`;

const ContributorsList = ({
  title,
  contributors
}) => {

  return (
    <BaseStyle>
      <h3>{title ? title : 'Contributors'}</h3>
      {
        contributors.length > 1 &&
        <div>
          {
            contributors.map(c => (
              <div>
                <a
                  href={`https://github.com/${c.nickname}`}
                  target="_blank"
                >
                  {c.nickname} -
                  {
                    c.publishedCount &&
                    <span>{c.publishedCount} pills</span>
                  }
                </a>
              </div>
            ))
          }
        </div>
      }
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
