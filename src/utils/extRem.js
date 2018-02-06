import { rem } from 'polished';
import theme from '../config/theme';

export default function extRem() {

  if (arguments.length > 1) {
    return Array.from(arguments).reduce((acc, item) => {
      const toPx = ` ${item}px`;
      return `${acc} ${rem(toPx, theme.remBase)}`;
    }, '');
  }

  return rem(`${arguments[0]}px`, theme.remBase);
}
