import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from './layout/dashboardLayout'
import UsersCreateView from './pages/admin-pages/users/view/create'
import UsersUpdateView from './pages/admin-pages/users/view/update'
import UsersListView from './pages/admin-pages/users/view/list'
import BlogsUpdateView from './pages/admin-pages/blogs/view/update'
import BlogsListView from './pages/admin-pages/blogs/view/list'
import BlogsCreateView from './pages/admin-pages/blogs/view/create'
import AdminAuthLayout from './layout/authLayout'
import SignInView from './pages/signIn/views/signInView'
import { useAuthContext } from './context/auth/hooks/useAuthContext'
import { useEffect } from 'react'
import { supabase } from './supabase'
import AuthGuardLogIn from './components/route-guards/auth/forSignIn'
import AuthGuardLogOut from './components/route-guards/auth/forSignOut'

function App() {

  const { handleSetUser } = useAuthContext();

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        console.log("Session: " ,session);
        if (session) {
          handleSetUser({
            id: session.user.id,
            email: session.user.email,
            token: session.access_token,
          });
        } else {
          handleSetUser(null);
        }
       
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        console.log("Session on auth state change:", session);
        if (session) {
          handleSetUser({
            id: session.user.id,
            email: session.user.email,
            token: session.access_token,
          });
        } else {
          handleSetUser(null);
        }
      })

      return () => subscription.unsubscribe()
    }, [handleSetUser])
    
  return (
    <Routes>
      <Route path="/" element={<Navigate to="auth" replace />} />


      <Route
              path="auth"
              element={
                
                  <AdminAuthLayout />
               
              }
            >
              <Route index element={<Navigate to="signin" replace />} />
              <Route path="signin" element={<AuthGuardLogIn><SignInView/></AuthGuardLogIn>}  />
      </Route>

      <Route path='admin' element={<AuthGuardLogOut><AdminLayout/></AuthGuardLogOut>}>

        <Route path='users' element = {<UsersListView/>}/>
        <Route path='users/create' element = {<UsersCreateView/>} />
        <Route path='users/update/:id' element = {<UsersUpdateView/>} />

        <Route path='blogs' element = {<BlogsListView/>}/>
        <Route path='blogs/create' element = {<BlogsCreateView/>} />
        <Route path='blogs/update/:id' element = {<BlogsUpdateView/>} />
        
      </Route>
    </Routes>

  )
}

export default App
