import {makeAutoObservable, toJS} from "mobx";
import Axios from "axios";
import {IApiDataResponse} from "../interfaces/IApiDataResponse";

export class DataStore {
    constructor() {
        makeAutoObservable(this)
    }

    data: IApiDataResponse = {} as any;

    firstInputValue: string = "";
    secondInputValue: string = "";

    firstCurrency: {
        key?: string;
        value?: string;
    } = {};
    secondCurrency: {
        key?: string;
        value?: string;
    } = {};


    setFirstInputValue(value: string) {
        this.firstInputValue = value;
    }

    setSecondInputValue(value: string) {
        this.secondInputValue = value;
    }

    setFirstCurrency(key: string, value: string) {
        this.firstCurrency = {
            key, value
        };
    }

    setSecondCurrency(key: string, value: string) {
        this.secondCurrency = {
            key, value
        };
    }

    async getData() {
        try {
            // const response = await fetch("http://api.currencylayer.com/live?access_key=d01db9428bbd853543ae486f6fd1042a")
            const response = await Axios.get<any>("http://api.currencylayer.com/live?access_key=d01db9428bbd853543ae486f6fd1042a&format=1")
            this.data = response.data;
            console.log("data", toJS(typeof this.data.quotes))
        } catch (e) {
            console.error(e)
        }
    }

    convert() {
        console.log("rr")
        if (this.firstInputValue && this.firstCurrency.key) {
            const firstInputValue = parseInt(this.firstInputValue)
            const firstCurrency = parseInt(this.firstCurrency.value!)

            const usdValue =  firstInputValue / firstCurrency

            console.log("usdValue", usdValue)
            if (this.secondCurrency.key) {
                const newValue = usdValue * parseInt(this.secondCurrency.value!);
                this.setSecondInputValue(newValue.toString())
            } else {
                this.setSecondCurrency("USDUSD", usdValue.toString())
            }
        }


    }
}
