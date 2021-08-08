import './App.css';
import Header from './components/header/header.component';
import Hero from './components/hero/hero.component';
import Home from './pages/home/home-page.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactUs from './pages/contactUs/contactus-page.component';
import Post from './pages/post/post-page.component';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
          <Route exact path="/" component={Home} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/posts/:postId" component={Post} />
      </div>
    </Router>
  );
}

export default App;
