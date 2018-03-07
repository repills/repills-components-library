import { createSection } from '../../utils/index';
import types from './types';
import sections from './sections';
import basic from './basic';
import social from './social';

const sectionTitle = 'Icons';
const sectionDescription = 'Description will be here';
const section = createSection({ title: sectionTitle });

section
  .add('Basic', basic(sectionTitle, sectionDescription))
  .add('Types', types(sectionTitle, sectionDescription))
  .add('Social', social(sectionTitle, sectionDescription))
  .add('Sections', sections(sectionTitle, sectionDescription));
