import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Expenses/Create';
import Expense from './components/Expenses/Expense';
import Expenses from './components/Expenses/Expenses';
import Update from './components/Expenses/Update';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Expenses />} />
            <Route path="/create" element={<Create />} />
            <Route path="/:id" element={<Expense />} />
            <Route path="/update/:id" element={<Update />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
