import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";
const InitializedApp = () => {
  initializeApp(firebaseConfig);
};

export default InitializedApp;
