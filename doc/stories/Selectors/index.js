import { createSection } from '../../utils';
import topicPage from './topic';
import sectionPage from './section';

const sectionTitle = 'Selectors';
const sectionDescription = 'Description will be here';
const section = createSection({ title: sectionTitle });

section
  .add('Topic', topicPage(sectionTitle, sectionDescription))
  .add('Section', sectionPage(sectionTitle, sectionDescription));
