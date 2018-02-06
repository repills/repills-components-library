import { createSection } from '../../utils';
import styles from './styles';

const sectionTitle = '2. Typography';
const sectionDescription = "Description will be here";
const section = createSection({ title: sectionTitle });

section
  .add('Styles', styles(sectionTitle, sectionDescription));
