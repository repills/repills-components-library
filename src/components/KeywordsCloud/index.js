import React from 'react';
import * as Icons from '../Icon/icons/basic';
import {
  arrayOf,
  string,
  number
} from 'prop-types';
import styled from 'styled-components';
import {
  base,
  list,
  tag
} from './style';

const BaseStyle = styled.div`${base}`;
const ListStyle = styled.div`${list}`;
const TagStyle = styled.div`${tag}`;

const KeywordsCloud = ({
  keywords,
  showed,
  ...others
}) => {

  const showedKeywords = showed ? keywords.slice(0, Math.max(showed, keywords.length)) : keywords;

  return (
    <BaseStyle
      {...others}
    >
      <ListStyle>
        { showedKeywords.map((e,i) => (<TagStyle key={`tag-${i}`}>{e}</TagStyle>)) }
      </ListStyle>
    </BaseStyle>
  );
};

KeywordsCloud.displayName = 'KeywordsCloud';

KeywordsCloud.propTypes = {
  keywords: arrayOf(string),
  showed: number
};

export default KeywordsCloud;
