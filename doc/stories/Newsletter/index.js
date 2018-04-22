import { createSection } from '../../utils';
import Basic from './basic';

const sectionTitle = 'Newsletter';
const section = createSection({ title: sectionTitle });

section
  .add('Basic', Basic(sectionTitle));
