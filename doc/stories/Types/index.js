import { createSection } from '../../utils/index';
import previewPage from './preview';
import listPage from './list';

const sectionTitle = 'Types';
const sectionDescription = 'Description will be here.';
const section = createSection({ title: sectionTitle });

section
  .add('Preview', previewPage(sectionTitle, sectionDescription))
  .add('List', listPage(sectionTitle, sectionDescription));
