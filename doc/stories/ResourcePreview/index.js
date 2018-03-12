import { createSection } from '../../utils/index';
import previewPage from './preview';
import miniPreviewPage from './mini-preview';
import listPage from './list';
import listWidthDetailPage from './listWithDetail';

const sectionTitle = 'Resource';
const sectionDescription = 'Description will be here.';
const section = createSection({ title: sectionTitle });

section
  .add('Preview', previewPage(sectionTitle, sectionDescription))
  .add('Mini preview', miniPreviewPage(sectionTitle, sectionDescription))
  .add('List', listPage(sectionTitle, sectionDescription))
  .add('List with detail', listWidthDetailPage(sectionTitle, sectionDescription));

