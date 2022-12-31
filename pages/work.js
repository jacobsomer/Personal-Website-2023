import GenericLayoutComponent from '../components/GenericLayoutCompnent';
import WorkContentComponent from '../components/WorkContentComponent';

export default function Work() {
  return <GenericLayoutComponent innerComponent={WorkContentComponent} />;
}
