import { createContext } from 'react';
import './App.css';
import Nav from './components/isAuthContext/Nav';
const logedIn = {
  isAuth: false,
  toogleAuth: function () {
    this.isAuth = !this.isAuth;
  }
}
const theme = {
  dark: {
    color: "white",
    background: "black"
  },
  light: {
    color: "black",
    background: "white"
  }
}
const ThemeContext = createContext();
const AuthContext = createContext();
function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <AuthContext.Provider value={logedIn}>
        <Nav />
      </AuthContext.Provider>
    </ThemeContext.Provider >
  );
}

export default App;
export { AuthContext, ThemeContext };