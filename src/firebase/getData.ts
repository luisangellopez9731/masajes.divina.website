import firebase_app from "./config";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
} from "firebase/firestore";
import { getFirebaseDoc, getFirebaseDocs } from "./utils";

const db = getFirestore(firebase_app);

export class FirebaseGetData<T> {
  collectionName: string;
  constructor(collectionName: string) {
    this.collectionName = collectionName;
  }

  public async getallDocsFromCollection() {
    const data = (await getFirebaseDocs(db, this.collectionName)).map(
      (doc) => ({
        ...doc.data(),
        id: doc.id,
      })
    );

    return data as T[];
  }

  public async getDoc(id: string) {
    const data = await getFirebaseDoc(db, this.collectionName, id);

    if (!data.exists()) {
      return null;
    }

    return { id, ...data.data() } as T;
  }
}
