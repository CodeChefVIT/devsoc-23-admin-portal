import { useEffect, useState } from "react";

export default function useAuth() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const currentToken = localStorage.getItem("token");
    if (currentToken) {
      setToken(currentToken);
    }
  }, []);

  const signIn = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return { token, signIn, signOut, isAuthenticated: token ? true : false };
}
