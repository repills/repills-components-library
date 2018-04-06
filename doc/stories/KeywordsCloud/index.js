import { createSection } from '../../utils/index';
import basic from './basic';

const sectionTitle = 'Keywords Cloud';
const section = createSection({ title: sectionTitle });

section
  .add('Basic', basic(sectionTitle));
