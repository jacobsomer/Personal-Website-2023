import GenericLayoutComponent from '../components/GenericLayoutCompnent';
import AboutContentComponent from '../components/AboutContentComponent';

export default function About() {
  return <GenericLayoutComponent innerComponent={AboutContentComponent} />;
}
