import axios from "axios";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  getIdToken,
  onAuthStateChanged,
} from "firebase/auth";

import { useEffect, useState } from "react";
import InitializedApp from "../Firebase/InitializedApp";

InitializedApp();
const Usefirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  //   newUser
  const newUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   oldUser
  const oldUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(setIsLoading(false));
  };

  //   setProfile
  const userProfile = (name) => {
    setIsLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        setUser(auth.currentUser);
        SaveUser(auth.currentUser?.displayName, auth.currentUser?.email);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(setIsLoading(false));
  };

  //   observer
  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((getIdToken) => {
          // console.log(getIdToken);
          setToken(getIdToken);
        });
        // ...
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  useEffect(() => {
    axios.get(`https://still-chamber-41424.herokuapp.com/users/${user?.email}`).then((res) => {
      if (!res.data.role) {
        setIsAdmin(false);
      } else if (res.data.role) {
        setIsAdmin(true);
      }
    });
  }, [user.email, isAdmin]);

  const SaveUser = (name, email) => {
    const user = { name, email };
    axios
      .post("https://still-chamber-41424.herokuapp.com/users", user)
      .then((res) => {})
      .catch((err) => {
        setError(err.meassage);
      });
  };

  // save old user
  const SaveOldUser = (name, email) => {
    const user = { name, email };

    axios
      .put("https://still-chamber-41424.herokuapp.com/users", user)
      .then((res) => res)
      .catch((err) => setError(err.meassage));
  };

  return {
    newUser,
    setUser,
    user,
    isloading,
    setIsLoading,
    error,
    setError,
    oldUser,
    logOut,
    userProfile,
    SaveUser,
    SaveOldUser,
    isAdmin,
    setIsAdmin,
    token,
  };
};

export default Usefirebase;
