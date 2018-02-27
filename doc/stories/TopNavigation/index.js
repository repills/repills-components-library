import { createSection } from '../../utils/index';
import basic from './basic';

const sectionTitle = 'Top navigation';
const sectionDescription = 'Description will be here';
const section = createSection({ title: sectionTitle });

section
  .add('Basic', basic(sectionTitle, sectionDescription));
