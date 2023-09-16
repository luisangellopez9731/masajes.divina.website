import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG as string);

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig as any) : getApps()[0];

export default firebase_app;
