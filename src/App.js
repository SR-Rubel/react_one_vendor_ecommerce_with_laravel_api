
import './App.scss';
import Admin from './container/Admin'
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import User from './container/User';

// --------------slick carosel-------------
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// --------------slick carosel-------------

function App() {
  return (
    <div className="App">
      <Router>
        <User />
        {/* <Admin /> */}
      </Router>
    </div>
  );
}

export default App;
