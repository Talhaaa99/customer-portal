// store.ts
import { dummyCustomers } from "@/lib/constants";
import { create } from "zustand";

type Customer = {
  name: string;
  details: string;
  photos: string[];
};

type Store = {
  customers: Customer[];
  selectedCustomer: Customer | null;
  selectCustomer: (name: string) => void;
  fetchCustomers: () => void;
};

export const useStore = create<Store>((set) => ({
  customers: dummyCustomers,
  selectedCustomer: null,
  selectCustomer: (name: string) =>
    set((state) => ({
      selectedCustomer: state.customers.find(
        (customer) => customer.name === name
      ),
    })),
  fetchCustomers: () => {
    // if you want to fetch data from an API
  },
}));
