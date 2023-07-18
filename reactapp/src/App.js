import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup"
import Applyloan from "./components/CustomerApplyloan/Applyloan";
import "./components/Signup/Signup.css"
import './components/Login/Login.css'
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Loanstatus from "./components/Customerloanstatus/Loanstatus";
import Profile from "./components/Customerprofile/Profile";
import AdminPage from "./components/AdminPage/admin"
import Appliedloans from "./components/Appliedloans/Adminappliedloans";
import Loanid from "./components/Loanid/Loanid";
import './components/Loanid/Loanid.css'
import LoanDetails from "./components/AdminloanDetails/LoanDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/admin' element={<AdminPage />}></Route>
          <Route path='/Applyloan' element={<Applyloan />}></Route>
          <Route path='/loanstatus' element={<Loanstatus />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          <Route path='/Appliedloans' element={<Appliedloans />}></Route>
          <Route path='/LoanDetails' element={<LoanDetails />}></Route>
          <Route path='/Loanid' element={<Loanid />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;