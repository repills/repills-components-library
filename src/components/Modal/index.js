import React from 'react';
import {
  func,
  bool,
  element
} from 'prop-types';
import { CloseIcon } from '../Icon/icons/basic';
import styled from 'styled-components';

import {
  base,
  overlay,
  wrapper,
  modal,
  content,
  close,
  header,
  body
} from './style';

// Styled block
const BaseStyle = styled.div`${base}`;
const OverlayStyle = styled.div`${overlay}`;
const WrapperStyle = styled.div`${wrapper}`;
const ModalStyle = styled.div`${modal}`;
const ContentStyle = styled.div`${content}`;
const CloseStyle = styled.div`${close}`;
const ModalHeaderStyle = styled.div`${header}`;
const ModalBodyStyle = styled.div`${body}`;

function Modal({
  handleClose,
  children,
  open
}) {
  return open ? (
    <BaseStyle>
      <OverlayStyle
        closeOnClick={handleClose}
        onClick={handleClose ? handleClose : null}
        open={open}
      />
      <WrapperStyle>
        <ModalStyle>
          <ContentStyle>
            <ModalHeaderStyle>
              {
                handleClose &&
                <CloseStyle
                  onClick={handleClose}
                >
                  <CloseIcon size={22} />
                </CloseStyle>
              }
            </ModalHeaderStyle>
            <ModalBodyStyle>
              {children}
            </ModalBodyStyle>
          </ContentStyle>
        </ModalStyle>
      </WrapperStyle>
    </BaseStyle>
  ) : null;
}

Modal.propTypes = {
  children: element.isRequired,
  handleClose: func,
  open: bool
};

export default Modal;
