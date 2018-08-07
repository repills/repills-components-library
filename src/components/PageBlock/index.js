import React from 'react';
import {
  string,
  any,
  number,
  bool,
  oneOf,
  shape,
  object
} from 'prop-types';
import Button from '../Button';
import styled from 'styled-components';
import ConsumeContainerQuery from '../../hoc/consume-container-query';
import {
  base,
  count,
  title,
  description,
  body,
  content,
  info,
  action
} from './style';

const BaseStyle = styled.div`${base}`;
const TitleStyle = styled.h2`${title}`;
const DescriptionStyle = styled.div`${description}`;
const BodyStyle = styled.div`${body}`;
const ContentsCountStyle = styled.div`${count}`;
const ContentStyle = styled.div`${content}`;
const InfoStyle = styled.div`${info}`;
const ActionStyle = styled.div`${action}`;

const PageBlock = ({
  breakpointsStatus,
  title,
  children,
  contentsCount,
  align,
  primaryAction,
  simple,
  description,
  ...others
}) => {

  return (
    <BaseStyle
      {...others}
    >
      <ContentStyle breakpointsStatus={breakpointsStatus}>
        <InfoStyle breakpointsStatus={breakpointsStatus}>
          <TitleStyle
            align={align}
            count={contentsCount}
          >
            <span>{title}</span>
            {
              contentsCount &&
              <ContentsCountStyle>{contentsCount}</ContentsCountStyle>
            }
          </TitleStyle>
          {
            description &&
            <DescriptionStyle
              align={align}
            >
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </DescriptionStyle>
          }
        </InfoStyle>
        {
          primaryAction &&
          <ActionStyle breakpointsStatus={breakpointsStatus}>
            <Button
              label="Take a look our topics"
              size="S"
              skin="primary"
              {...primaryAction}
            />
          </ActionStyle>
        }
      </ContentStyle>
      <BodyStyle
        simple={simple}
      >
        {children}
      </BodyStyle>
    </BaseStyle>
  );
};

PageBlock.displayName = 'PageBlock';

PageBlock.propTypes = {
  align: oneOf(['LEFT', 'CENTER']),
  breakpointsStatus: object,
  children: any,
  contentsCount: number,
  description: string,
  primaryAction: shape(Button.propTypes),
  simple: bool,
  title: string
};

PageBlock.defaultProps = {
  align: 'LEFT'
};

export default ConsumeContainerQuery(PageBlock);
