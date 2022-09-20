import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserAccepted } from "../store/slices/login/loginSlice";

export function useProvideAuth() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(localStorage.getItem("userAccepted"));
  }, []);
  const dispatch = useDispatch();
  const signIn = () => dispatch(setUserAccepted(true));
  const signOut = () => dispatch(setUserAccepted(false));
  return {
    user,
    signIn,
    signOut,
  };
}
