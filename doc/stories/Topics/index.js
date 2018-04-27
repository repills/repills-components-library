import { createSection } from '../../utils/index';
import previewPage from './preview';
import previewExtendedPage from './previewExtended';
import listPage from './list';

const sectionTitle = 'Topics';
const sectionDescription = 'Description will be here.';
const section = createSection({ title: sectionTitle });

section
  .add('Preview', previewPage(sectionTitle, sectionDescription))
  .add('Preview (extended)', previewExtendedPage(sectionTitle, sectionDescription))
  .add('List', listPage(sectionTitle, sectionDescription));
