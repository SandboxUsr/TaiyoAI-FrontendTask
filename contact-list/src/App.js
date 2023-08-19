import './App.css';
import ContactPage from "./Components/ContactPage"
import ContactDetailsForm from './Components/ContactDetailsForm';
import EditContact from './Components/EditContact';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContactPage />} />
        <Route path='/add' element={<ContactDetailsForm />} />
        <Route path='/edit' element={<EditContact />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
