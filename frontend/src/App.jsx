import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Expenses from "./components/Expenses";
import Expense from "./components/Expense";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/expenses" element={<Expenses />}/>
        <Route path="/expenses/:id" element={<Expense />}/>
      </Routes>
    </Router>
  )
}

export default App
