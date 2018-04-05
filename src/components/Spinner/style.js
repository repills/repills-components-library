import { css } from 'styled-components';
import theme from '../../config/theme';
const { neutral } = theme.palettes;

export const base = css`
  position: relative;
  
  ${props => (props.position === 'absolute' || props.position === 'fixed') && `
    background-color: ${neutral.lowest};
    top: 0;
    left; 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: ${theme.zIndex.overlay};
  `}
  
  ${props => props.position === 'fixed' && `
    position: fixed;
  `}
  
  ${props => props.position === 'absolute' && `
    position: absolute;
  `}
`;
