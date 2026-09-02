import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)

// Provider The application's entry point.
//  It mounts <App /> into the DOM, and wraps it in Redux's <Provider> 
// so that every component in the tree — no matter how deeply nested — can access the store 
// via useSelector/useDispatch without prop-drilling.



// 1. Browser loads → main.jsx runs
//         │
//         ▼
//    Wraps <App /> in Redux <Provider store={store}>
//         │
//         ▼
// 2. App.jsx mounts
//         │
//         ▼
//    Calls AuthService → asks Appwrite: "is there an active session?"
//         │
//         ├── Yes → dispatch login(userData) into Redux
//         └── No  → dispatch logout() into Redux
//         │
//         ▼
// 3. Redux store now holds current auth state: { status, userData }
//         │
//         ▼
// 4. Header.jsx reads that state via useSelector
//         │
//         ▼
//    Decides which nav links to show:
//    logged out → Login / Signup
//    logged in  → All Posts / Add Post / Logout
//         │
//         ▼
// 5. User clicks a nav link → React Router navigates
//    (e.g. to a Login page, which will use AuthService.Login()
//     and dispatch(login()) again on success)
//         │
//         ▼
// 6. On any content page (Home, All Posts, Add Post, Post detail):
//    component calls service.* methods (getAllPosts, createPost,
//    uploadFile, etc.) directly — these talk to Appwrite's
//    Database and Storage independently of the auth flow
//         │
//         ▼
// 7. LogoutBtn, when clicked, calls AuthService to end the
//    Appwrite session, then dispatches logout() so Redux and
//    the actual backend session stay in sync