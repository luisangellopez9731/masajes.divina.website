import {
  Firestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";

export const getFirebaseDocs = async (
  db: Firestore,
  collectionName: string
) => {
  return (await getDocs(query(collection(db, collectionName)))).docs;
};

export const getFirebaseDoc = async (
  db: Firestore,
  collectionName: string,
  id: string
) => {
  const data = await getDoc(doc(db, collectionName, id));

  return data;
};
