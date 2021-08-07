import Valikko from './Valikko';
import About from './About';
import Info from './Info';
import Skills from './Skills';
import Contact from './Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

function App() {

  return (
    <Router>
      <Route path="/" exact><Valikko/><Route/>
      <Route path="/" exact><Info/></Route>
      <Divider  variant="inset"/>
      <Route path="/" exact><About/></Route>
      <Divider  variant="inset"/>
      <Route path="/" exact></Route><Skills/></Route>
      <Divider  variant="inset"/>
      <Route path="/" exact><Contact/></Route>
    </Router>
  );
}

export default App;