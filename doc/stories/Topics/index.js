import { createSection } from '../../utils/stories';
import previewPage from './preview';
import listPage from './list';

const sectionTitle = 'Topics';
const sectionDescription = 'Description will be here.';
const section = createSection({ title: sectionTitle });

section
  .add('Preview', previewPage(sectionTitle, sectionDescription))
  .add('List', listPage(sectionTitle, sectionDescription));


