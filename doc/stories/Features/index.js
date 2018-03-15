import { createSection } from '../../utils/index';
import listPage from './list';

const sectionTitle = 'Features';
const sectionDescription = 'Description will be here.';
const section = createSection({ title: sectionTitle });

section
  .add('Basic', listPage(sectionTitle, sectionDescription));


