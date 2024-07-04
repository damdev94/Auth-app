import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './functions/auth/authContext';
import PrivateRoute from './components/auth/privateRoute';
import SignUp from './pages/auth/signup';
import SignIn from './pages/auth/signin';
import UserInfos from './pages/userInfos';
import UserEdit from './pages/userEdit';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/userinfos' element={<PrivateRoute element={<UserInfos />} />} />
          <Route path='/userinfos/edit' element={<PrivateRoute element={<UserEdit />} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
