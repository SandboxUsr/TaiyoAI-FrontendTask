import './App.css';
import ContactPage from "./Components/ContactPage"
import ContactDetailsForm from './Components/ContactDetailsForm';
import EditContact from './Components/EditContact';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Map from './Components/Map';

const queryClient = new QueryClient();

function App() {
  return <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ContactPage />} />
          <Route path='/add' element={<ContactDetailsForm />} />
          <Route path='/edit' element={<EditContact />} />
          <Route path='/map' element={<Map />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </>
}

export default App;
