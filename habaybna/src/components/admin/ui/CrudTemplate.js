import CrudPageBody from "./CrudPageBody";
import CrudPageHeader from "./CrudPageHeader";
import AdminLayout from "../../../components/admin/layout/AdminLayout";
function CrudTemplate(props) {
  return (
    <AdminLayout>
      <CrudPageHeader title={props.title}>{props.header}</CrudPageHeader>
      <CrudPageBody>{props.children}</CrudPageBody>
    </AdminLayout>
  );
}

export default CrudTemplate;
