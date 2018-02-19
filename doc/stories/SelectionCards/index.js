import { createSection } from '../../utils';
import sectionPage from './section';

const sectionTitle = 'Selection Preview';
const sectionDescription = 'Description will be here';
const section = createSection({ title: sectionTitle });

section
  .add('Section', sectionPage(sectionTitle, sectionDescription));
