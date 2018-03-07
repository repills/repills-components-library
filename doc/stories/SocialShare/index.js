import { createSection } from '../../utils/index';
import buttons from './buttons';
import bar from './bar';

const sectionTitle = 'Social Share';
const sectionDescription = 'Description will be here.';
const section = createSection({ title: sectionTitle });

section
  .add('Buttons', buttons(sectionTitle, sectionDescription))
  .add('Bar', bar(sectionTitle, sectionDescription));
