import { createSection } from '../../utils/index';
import previewPage from './preview';
import listPage from './list';
import carouselPage from './carousel';

const sectionTitle = 'Sections';
const sectionDescription = 'Description will be here.';
const section = createSection({ title: sectionTitle });

section
  .add('Preview', previewPage(sectionTitle, sectionDescription))
  .add('List', listPage(sectionTitle, sectionDescription))
  .add('Carousel', carouselPage(sectionTitle, sectionDescription));
