import {Route, useParams} from 'react-router-dom'
import Comments from '../components/comments/Comments'
function QouteDetail() {
    const params = useParams()

  return (
    <div>
        <div>
            QouteDetail {params.id}
        </div>
        <Route path={`/quotes/${params.id}/comments`}>
            <Comments></Comments>
        </Route>
    </div>

  )
}

export default QouteDetail