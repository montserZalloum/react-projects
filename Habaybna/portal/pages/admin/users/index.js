import AdminLayout from "../../../layout/AdminLayout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Card from "../../../components/base/Card";
import { useRouter } from "next/router";
import Link from "next/link";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function SimpleTable() {
  const router = useRouter();
  const handleEdit = (values) => {
    console.log("The Values that you wish to edit ", values);
  };

  return (
    <AdminLayout>
      <div className="d-flex mb-30">
        <div className="w-30 bg-white radius-4 center -bold shadow-2">
          <Link href="/admin/users/specialist/add">
            <a className="p-15 d-block">Specialist</a>
          </Link>
        </div>
      </div>
      <Card>
        <div className="mb-30">
          <Button
            onClick={() => router.push("/admin/courses/add")}
            variant="contained"
            endIcon={<AddIcon />}
          >
            New User
          </Button>
        </div>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Type</TableCell>
                <TableCell align="left">Lectures No.</TableCell>
                <TableCell align="left">Length</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  <TableCell align="left">{row.carbs}</TableCell>
                  <TableCell align="left">{row.protein}</TableCell>
                  <TableCell align="left">
                    <Button aria-label="edit" onClick={() => handleEdit(row)}>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </AdminLayout>
  );
}
