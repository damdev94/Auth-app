import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './functions/auth/authContext'
import PrivateRoute from './components/auth/privateRoute'
import SignUp from './pages/auth/signup'
import SignIn from './pages/auth/signin'
import Profile from './pages/profile'
import UserEdit from './pages/userEdit'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/profile' element={<PrivateRoute element={<Profile />} />} />
          <Route path='/profile/edit' element={<PrivateRoute element={<UserEdit />} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
