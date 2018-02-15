import { createSection } from '../../utils/index';
import previewPage from './preview';

const sectionTitle = 'Resource Detail';
const sectionDescription = 'Description will be here.';
const section = createSection({ title: sectionTitle });

section
  .add('Preview', previewPage(sectionTitle, sectionDescription));

