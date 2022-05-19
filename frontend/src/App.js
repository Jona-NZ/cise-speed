import { Routes, Route } from 'react-router-dom';

/* IMPORT PAGES */
import Home from './pages/Home';
import Search from './pages/Search';
import Moderator from './pages/Moderator';
import Analyst from './pages/Analyst';
import Admin from './pages/Admin';
import Error from './pages/Error';
import SubmitArticle from './pages/SubmitArticle';

/* IMPORT COMPONENTS */
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/submit" element={<SubmitArticle />} />
        <Route path="/search" element={<Search />} />
        <Route path="/moderator" element={<Moderator />} />
        <Route path="/analyst" element={<Analyst />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
