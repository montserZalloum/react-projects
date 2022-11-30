import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CourseLessonsList from '../../../components/admin/CourseLessonsList'
import CrudTemplate from '../../../components/admin/ui/CrudTemplate'
import useHttp from '../../../hooks/useHttp'

function LessonsList() {
    const [lessons,setLessons] = useState([])
    const {isLoading, sendRequest: getRequest} = useHttp()
    const {id} = useParams()
    const headerOptions = <Link to={`/admin/courses/${id}/lessons/add`}>New Lesson</Link>;

    useEffect(()=>{
        getData()
    },[getRequest])

    function getData() {
        function storeData(data) {
            const courseLessons = data.filter((lesson)=>{
                return lesson.courseID === id 
            })
            setLessons(courseLessons)
        }
        getRequest({url:'lessons',method: 'GET'},storeData)
    }

  return (
    <CrudTemplate title="Lessons" header={headerOptions}>
      {isLoading && <h1>Loading ...</h1>}
      {!isLoading && <CourseLessonsList data={lessons} onRemoveUser={getData} />}
      
    </CrudTemplate>
  )
}

export default LessonsList