import { createSection } from '../../utils';
import textfield from './textfield';

const sectionTitle = 'Input';
const section = createSection({ title: sectionTitle });

section
  .add('Text field', textfield(
    sectionTitle,
    "..."
  ));
