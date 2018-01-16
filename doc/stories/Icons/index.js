import { createSection } from '../../utils/stories/index';
import Types from './types';

const sectionTitle = 'Icone';
const sectionDescription = 'Description will be here';
const section = createSection({ title: sectionTitle });

section
  .add('Types', Types(sectionTitle, sectionDescription));
