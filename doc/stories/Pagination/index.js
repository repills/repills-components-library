import { createSection } from '../../utils/index';
import basic from './basic';
import responsive from './responsive';

const sectionTitle = 'Pagination';
const sectionDescription = 'Description will be here';
const section = createSection({ title: sectionTitle });

section
  .add('Basic', basic(sectionTitle, sectionDescription))
  .add('Responsive', responsive(sectionTitle, sectionDescription));
