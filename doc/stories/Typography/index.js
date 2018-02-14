import { createSection } from '../../utils';
import styles from './styles';

const sectionTitle = 'Typography';
const sectionDescription = "Description will be here";
const section = createSection({ title: sectionTitle });

section
  .add('Styles', styles(sectionTitle, sectionDescription));
