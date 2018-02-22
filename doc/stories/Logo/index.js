import { createSection } from '../../utils';
import Basic from './basic';

const sectionTitle = 'Logo';
const section = createSection({ title: sectionTitle });

section
  .add('Basic', Basic(sectionTitle));
