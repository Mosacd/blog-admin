import { useAuthContext } from "./context/auth/hooks/useAuthContext";
import { useEffect } from "react";
import { supabase } from "./supabase";
import AppRoutes from "./routes";

function App() {
  const { handleSetUser } = useAuthContext();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("Session: ", session);
      if (session) {
        handleSetUser({
          id: session.user.id,
          email: session.user.email,
          token: session.access_token,
        });
      } else {
        handleSetUser(null);
      }
    });

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
    });

    return () => subscription.unsubscribe();
  }, [handleSetUser]);

  return <AppRoutes />;
}

export default App;
