import React, { useEffect, useState } from 'react'
import CoursesSection from '../components/CoursesSection'
import DefaultLayout from '../components/layout/DefaultLayout'
import useHttp from '../hooks/useHttp'

function HomePage() {

    const {sendRequest} = useHttp()
    const [courses,setCourses] = useState([])
    
    // *********
    // courses 
    // *********
    useEffect(()=>{
        function cb(data){
            setCourses(data)
        }
        
        sendRequest({url:'courses',method: 'GET'},cb)
    },[])

  return (
    <DefaultLayout>
      <div className='homepage mt-30'>
        <div className='container'>
          <CoursesSection data={courses} hasShowMore={true} />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default HomePage