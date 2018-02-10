import { createSection } from '../../utils/index';
import types from './types';
import sections from './sections';
import basic from './basic';

const sectionTitle = '3. Icons';
const sectionDescription = 'Description will be here';
const section = createSection({ title: sectionTitle });

section
  .add('Basic', basic(sectionTitle, sectionDescription))
  .add('Types', types(sectionTitle, sectionDescription))
  .add('Sections', sections(sectionTitle, sectionDescription));
