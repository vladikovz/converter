import {createContext} from "react";
import {MainStore} from "../stores/MainStore";

export const MainStoreP = new MainStore();

export const StoreContext = createContext(MainStoreP);
