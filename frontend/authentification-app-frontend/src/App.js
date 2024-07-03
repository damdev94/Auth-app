import {Route, Routes, BrowserRouter } from 'react-router-dom'
import SignUp from './pages/signup'
import SignIn from './pages/signin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element= {<SignUp />} />
        <Route path='/signin' element= {<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
