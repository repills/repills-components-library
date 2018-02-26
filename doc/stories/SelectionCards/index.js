import { createSection } from '../../utils';
import sectionPage from './section';
import topicPage from './topic';

const sectionTitle = 'Selection Preview';
const sectionDescription = 'Description will be here';
const section = createSection({ title: sectionTitle });

section
  .add('Topic', topicPage(sectionTitle, sectionDescription))
  .add('Section', sectionPage(sectionTitle, sectionDescription));
