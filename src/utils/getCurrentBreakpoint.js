import { queryList } from '../config/breakpoints';

export default function(statusBreakpoints) {
  let current = null;

  queryList.forEach(b => {
    if (statusBreakpoints[b]) {
      current = b;
    }
  });

  return current;
};
