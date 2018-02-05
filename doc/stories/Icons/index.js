import { createSection } from '../../utils/index';
import Types from './types';

const sectionTitle = '3. Icons';
const sectionDescription = 'Description will be here';
const section = createSection({ title: sectionTitle });

section
  .add('Types', Types(sectionTitle, sectionDescription));
