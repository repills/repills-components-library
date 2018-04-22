import React from 'react';
import Button from '../Button';
import {
  string,
  object
} from 'prop-types';
import TextField from '../TextField';
import Logo from './logo';
import QueryHandler from '../QueryHandler';

import styled from 'styled-components';
import {
  action,
  base,
  content,
  form,
  commonWrapper,
  intro,
  label,
  logo,
  note,
} from './style';
const ActionStyle = styled.div`${action}`;
const BaseStyle = styled.div`${base}`;
const ContentStyle = styled.div`${content}`;
const FormStyle = styled.form`${form}`;
const FormWrapperStyle = styled.div`${commonWrapper}`;
const InfoWrapperStyle = styled.div`${commonWrapper}`;
const IntroStyle = styled.p`${intro}`;
const LabelStyle = styled.label`${label}`;
const LogoStyle = styled.div`${logo}`;
const NoteStyle = styled.p`${note}`;

class Newsletter extends React.Component {

  static propTypes = {
    breakpointsStatus: object,
    intro: string,
    label: string,
    note: string
  };

  static defaultProps = {
    breakpointsStatus: {}
  };

  render() {
    const {
      breakpointsStatus,
      intro,
      label,
      note
    } = this.props;

    return (
      <BaseStyle>
        <ContentStyle breakpointsStatus={breakpointsStatus}>
          <InfoWrapperStyle breakpointsStatus={breakpointsStatus}>
            <LogoStyle>
              <Logo />
            </LogoStyle>
            {
              intro &&
              <IntroStyle dangerouslySetInnerHTML={{ __html: intro }} />
            }
          </InfoWrapperStyle>
          <FormWrapperStyle breakpointsStatus={breakpointsStatus}>
            {
              label &&
              <LabelStyle htmlFor="mce-EMAIL">{label}</LabelStyle>
            }
            <FormStyle
              action="//fullstackbulletin.us15.list-manage.com/subscribe/post?u=b015626aa6028495fe77c75ea&amp;amp;id=55ace33899"
              method="POST"
              target="_blank"
            >
              <TextField
                expanded
                id="mce-EMAIL"
                name="EMAIL"
                placeholder="you.are.awesome@email.com"
                size="L"
                type="email"
              />
              <ActionStyle>
                <Button
                  expanded
                  label="Subscribe now"
                  type="submit"
                />
              </ActionStyle>
              {
                note &&
                <NoteStyle dangerouslySetInnerHTML={{ __html: note }} />
              }
            </FormStyle>
          </FormWrapperStyle>
        </ContentStyle>
      </BaseStyle>
    );
  }
}

export default QueryHandler(Newsletter);
