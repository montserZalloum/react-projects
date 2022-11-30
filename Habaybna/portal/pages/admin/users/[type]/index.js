import AdminLayout from "../../../../layout/AdminLayout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Card from "../../../../components/base/Card";
import { useRouter } from "next/router";
import Link from "next/link";
import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { server } from "../../../../config";

export default function SimpleTable({ userType }) {
  const router = useRouter();
  const [usersList, setUsersList] = useState([]);
  const handleEdit = (values) => {
    console.log("The Values that you wish to edit ", values);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await fetch(`${server}/user/type/${userType}`)
        ).json();
        setUsersList(data);
      } catch (error) {
        console.log(error);
        setUsersList([]);
      }
    }
    fetchData();
  }, []);

  return (
    <AdminLayout>
      <div className="d-flex mb-30 space-between">
        <div className="w-30 bg-white radius-4 center -bold shadow-2">
          <Link href="/admin/users/specialist/add">
            <a className="p-15 d-block black">Specialist</a>
          </Link>
        </div>
        <div className="w-30 bg-white radius-4 center -bold shadow-2">
          <Link href="/admin/users/parents/add">
            <a className="p-15 d-block black">parents</a>
          </Link>
        </div>
        <div className="w-30 bg-white radius-4 center -bold shadow-2">
          <Link href="/admin/users/others/add">
            <a className="p-15 d-block black">others</a>
          </Link>
        </div>
      </div>
      <Card>
        <div className="d-flex space-between mb-30">
          <h1 className="capitalize">{userType} List</h1>
          <Button
            onClick={() => router.push("/admin/courses/add")}
            variant="contained"
            endIcon={<AddIcon />}
          >
            New User
          </Button>
        </div>
        {usersList.length > 0 ? (
          <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Mobile</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Gender</TableCell>
                <TableCell align="left">{userType == "parents" ? "صلة القرابة" : "Specialization"}</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersList.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">{index + 1}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.firstName}
                  </TableCell>
                  <TableCell align="left">{row.mobileNumber}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.isPublished ? "Active" : "Inactive"}</TableCell>
                  <TableCell align="left">{row.gender}</TableCell>
                  <TableCell align="left">{userType == "parents" ? row.relativeRelation : row.specialization}</TableCell>
                  <TableCell align="left">
                    <Link href={`/admin/users/${userType}/edit`}>
                      <Fab
                        className="mr-10"
                        size="small"
                        color="secondary"
                        aria-label="edit"
                      >
                        <EditIcon size="small" />
                      </Fab>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        ) : 
        (<p className="center">No Data</p>)
        }
        
      </Card>
    </AdminLayout>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      userType: params.type,
    },
  };
}
