import GenericLayoutComponent from '../components/GenericLayoutCompnent';
import EditBlog from '../components/admin/EditBlog';

export default function Admin() {
  return <GenericLayoutComponent innerComponent={EditBlog} />;
}
