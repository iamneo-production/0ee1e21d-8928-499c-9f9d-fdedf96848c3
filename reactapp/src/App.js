import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup"
import Customerapplyloan from "./components/Customerapplyloan/Customerapplyloan";
import "./components/Signup/Signup.css"
import './components/Login/Login.css'
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Customerloanstatus from "./components/Customerloanstatus/Customerloanstatus";
import Customerprofile from "./components/Customerprofile/Customerprofile";
import AdminPage from "./components/AdminPage/admin"
import Adminappliedloans from "./components/Adminappliedloans/Adminappliedloans";
import Loanid from "./components/Loanid/Loanid";
import './components/Loanid/Loanid.css'
import Adminloandetails from "./components/Adminloandetails/Adminloandetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/admin' element={<AdminPage />}></Route>
          <Route path='/Applyloan' element={<Customerapplyloan />}></Route>
          <Route path='/loanstatus' element={<Customerloanstatus />}></Route>
          <Route path='/profile' element={<Customerprofile />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          <Route path='/Appliedloans' element={<Adminappliedloans />}></Route>
          <Route path='/LoanDetails' element={<Adminloandetails />}></Route>
          <Route path='/Loanid' element={<Loanid />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;