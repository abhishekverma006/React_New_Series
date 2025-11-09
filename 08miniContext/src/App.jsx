
import UserContextProvider from './context/UserContextProvider.jsx'
import Profile from './components/Profile.jsx'
import Login from './components/Login.jsx'

function App() {


  return (
    <>
      <UserContextProvider>
        <h1>This is the tutorial of the API Context</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
