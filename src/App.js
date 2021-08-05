import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages';
import LoginPage from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
