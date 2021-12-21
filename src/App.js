import { createContext } from 'react';
import './App.css';
import Nav from './components/isAuthContext/Nav';
const logedIn = {
  isAuth: false,
  toogleAuth: function () {
    this.isAuth = !this.isAuth;
  }
}
const AuthContext = createContext();
function App() {
  return (
    <AuthContext.Provider value={logedIn}>
      <Nav />
    </AuthContext.Provider>
  );
}

export default App;
export { AuthContext };