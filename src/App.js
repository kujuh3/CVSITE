import All from './components/All';
import Example from './components/Example';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

function App() {

  return (
    <Router>
      <All/>
      <Route path="/example/:id" exact component={Example}/>
      <Divider  variant="inset"/>
    </Router>
  );
}

export default App;