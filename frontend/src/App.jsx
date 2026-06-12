

import './App.css'
import Header from './components/header'
import Body from './components/body2'
import Footer from './components/footer'
import appStore from './components/utils/appstore'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AuthProvider } from './components/auth/AuthContext'


function App() {
  return(
    <AuthProvider>
      <Provider store={appStore}>
          <Header/>
          {/* <Body/> */}
          <Outlet/>
          <Footer/>  
      </Provider>
    </AuthProvider>
  )
}

export default App
