import {Route,Switch,Redirect} from 'react-router-dom'
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQoute from './pages/NewQoute';
import QouteDetail from './pages/QouteDetail';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes'></Redirect> 
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes></AllQuotes>
        </Route>
        <Route path="/quotes/:id" >
          <QouteDetail></QouteDetail>
        </Route>
        <Route path="/new-quote">
          <NewQoute></NewQoute>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
