import { createSection } from '../../utils';
import textfield from './textfield';
import textfieldSuggestions from './textfield-suggestions';

const sectionTitle = 'Input';
const section = createSection({ title: sectionTitle });

section
  .add('Text field', textfield(
    sectionTitle,
    "..."
  ))
  .add('Text field with suggestions', textfieldSuggestions(
    sectionTitle,
    "..."
  ));
