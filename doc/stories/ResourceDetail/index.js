import { createSection } from '../../utils/index';
import previewPage from './preview';
import videoPreviewPage from './video';

const sectionTitle = 'Resource Detail';
const sectionDescription = 'Description will be here.';
const section = createSection({ title: sectionTitle });

section
  .add('Preview', previewPage(sectionTitle, sectionDescription))
  .add('Video preview', videoPreviewPage(sectionTitle, sectionDescription));

