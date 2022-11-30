import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CoursesList from '../../components/admin/courses/CoursesList';
import AdminLayout from '../../components/admin/layout/AdminLayout'
import CrudLayout from '../../components/admin/layout/CrudLayout'

interface Course {
    id: string;
    courseTitle: string;
};

function AdminCoursesPage() {

    const [courses,setCourses] = useState<Course[]>([])
    const [isLoading,setIsLoading] = useState<Boolean>(true)

    const headerOpts = <Link to="/admin/courses/add">ADD</Link>;
    
    useEffect(()=>{
        try {
            const fetchData = async () =>{
                const data = await axios.request({
                    url: 'http://localhost:4000/course',
                    method: 'GET'
                });
                setCourses(data.data)
                setIsLoading(false)
            }
            fetchData()
        } catch (err) {
            console.log(err)
        }
    },[])
    
    

  return (
    <AdminLayout>
        <CrudLayout title="Courses List" headerOpts={headerOpts}>
            {isLoading && <h1>Loading ...</h1>}
            {!isLoading && <CoursesList data={courses} />}
            
        </CrudLayout>
    </AdminLayout>
  )
}

export default AdminCoursesPage