import { FirebaseGetData } from "@/firebase/getData";

export interface ServiceApi {
  clientsQuantity: number;
  description?: string;
  durationInMinutes: number;
  employeeQuantity: number;
  name: string;
  price: number;
  priceAtHome?: number;
  visible: boolean;
}

class ServicesFirebaseGetData extends FirebaseGetData<ServiceApi> {
  constructor() {
    super("services");
  }
}

export const getServices = async () => {
  const servicesFirebaseGetData = new ServicesFirebaseGetData();
  return await servicesFirebaseGetData.getallDocsFromCollection();
};
