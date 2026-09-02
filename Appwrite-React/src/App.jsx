import { useState , useEffect} from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './Appwrite/Auth'
import {login , logout} from './store/authSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer'
function App() {
  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser().then((user) => {
      if(userData){
        dispatch({userData});
      } else{
        dispatch(logout());
      }
    }).finally(() => setLoading(false));
  },[])
  

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-grey-400'>
      <div className='w-full-block'>
        <Header />
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
