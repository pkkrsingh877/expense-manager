import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Expenses/Create';
import Expense from './components/Expenses/Expense';
import Expenses from './components/Expenses/Expenses';
import Update from './components/Expenses/Update';
import NotFound from './components/NotFound';
import About from './components/About';
import Navbar from './components/Utilities/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/expense" element={<Expenses />} />
            <Route path="/expense/create" element={<Create />} />
            <Route path="/expense/:id" element={<Expense />} />
            <Route path="/expense/update/:id" element={<Update />} />
            <Route path="/about" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
