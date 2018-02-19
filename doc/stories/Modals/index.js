import { createSection } from '../../utils';
import basic from './basic/index';

const sectionTitle = 'Modal';
const section = createSection({ title: sectionTitle });

section
  .add('Basic', basic(sectionTitle));
