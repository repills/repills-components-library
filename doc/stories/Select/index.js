import { createSection } from '../../utils';
import Basic from './basic';

const sectionTitle = 'Select';
const section = createSection({ title: sectionTitle });

section
  .add('Basic', Basic(sectionTitle));
