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
  logo,
  note,
  fieldGroup,
  introWrapper
} from './style';
const ActionStyle = styled.div`${action}`;
const BaseStyle = styled.div`${base}`;
const ContentStyle = styled.div`${content}`;
const FormStyle = styled.form`${form}`;
const FormWrapperStyle = styled.div`${commonWrapper}`;
const InfoWrapperStyle = styled.div`${commonWrapper}`;
const IntroStyle = styled.p`${intro}`;
const LogoStyle = styled.div`${logo}`;
const NoteStyle = styled.p`${note}`;
const FieldGroupStyle = styled.div`${fieldGroup}`;
const IntroWrapperStyle = styled.div`${introWrapper}`;

class Newsletter extends React.Component {

  static propTypes = {
    breakpointsStatus: object,
    intro: string.isRequired,
    note: string
  };

  static defaultProps = {
    breakpointsStatus: {}
  };

  render() {
    const {
      breakpointsStatus,
      intro,
      note
    } = this.props;

    return (
      <BaseStyle>
        <ContentStyle breakpointsStatus={breakpointsStatus}>
          <InfoWrapperStyle breakpointsStatus={breakpointsStatus}>
            <IntroWrapperStyle>
              <LogoStyle>
                <Logo />
              </LogoStyle>
              <IntroStyle dangerouslySetInnerHTML={{ __html: intro }} />
            </IntroWrapperStyle>
          </InfoWrapperStyle>
          <FormWrapperStyle breakpointsStatus={breakpointsStatus}>
            <FormStyle
              action="//fullstackbulletin.us15.list-manage.com/subscribe/post?u=b015626aa6028495fe77c75ea&amp;id=55ace33899"
              method="POST"
              target="_blank"
            >
              <FieldGroupStyle>
                <TextField
                  expanded
                  id="mce-EMAIL"
                  name="EMAIL"
                  placeholder="you.are.awesome@email.com"
                  type="email"
                />
                <Button
                  autoWidth
                  label="Join"
                  skin="primary"
                  type="submit"
                />
              </FieldGroupStyle>
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
