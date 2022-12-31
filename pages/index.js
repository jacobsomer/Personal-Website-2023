import GenericLayoutComponent from '../components/GenericLayoutCompnent';
import HomeContentComponent from '../components/HomeContentComponent';

export default function Home() {
  return <GenericLayoutComponent innerComponent={HomeContentComponent} />;
}
