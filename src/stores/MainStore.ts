import {DataStore} from "./DataStore";

export class MainStore {
    dataStore: DataStore;
    constructor() {
        this.dataStore = new DataStore();
    }
}
