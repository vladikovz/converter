import React, {ChangeEvent, useContext, useEffect, useState} from "react";
import {observer} from "mobx-react";
import {StoreContext} from "../../context/StoreContext";

interface ISelect {
    inputNumber: "first" | "second";
}

export const Select = observer((props: ISelect) => {
    const store = useContext(StoreContext)
    const [inputValue, setInputValue] = useState("")

    useEffect(()=>{
        store.dataStore.convert();
    }, [store.dataStore.firstInputValue, store.dataStore.secondInputValue])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        if (props.inputNumber === "first") {
            store.dataStore.setFirstInputValue(e.target.value)
        } else if (props.inputNumber === "second") {
            store.dataStore.setSecondInputValue(e.target.value)
        }
    }

    const handleCurrencyClick = (currencyKey: string, currencyValue:string) => {
        console.log("click", currencyValue)

        if (props.inputNumber === "first") {
            store.dataStore.setFirstCurrency(currencyKey, currencyValue);
        } else if (props.inputNumber === "second") {
            store.dataStore.setSecondCurrency(currencyKey, currencyValue);
        }
    }

    return (
        <>
            <input type={"number"} onChange={(e) => handleChange(e)}
                   value={props.inputNumber === "first" ? store.dataStore.firstInputValue : store.dataStore.secondInputValue}
                   list="value"/>
            <input list="currency"/>
            <datalist id="currency" onClick={() => handleCurrencyClick("df", "ff")}>
                {
                    store.dataStore.data.quotes && Object.entries(store.dataStore.data.quotes).map(([key, value]) => {
                        return (
                            <div onClick={() => handleCurrencyClick(key, value.toString())}>
                                <option value={key}>{value}</option>
                            </div>

                        )
                    })
                }
            </datalist>

            {/*<Select*/}
            {/*    labelId="demo-simple-select-label"*/}
            {/*    id="demo-simple-select"*/}
            {/*    value={age}*/}
            {/*    label="Age"*/}
            {/*    onChange={handleChange}*/}
            {/* inputNumber={}>*/}
            {/*    <MenuItem value={10}>Ten</MenuItem>*/}
            {/*    <MenuItem value={20}>Twenty</MenuItem>*/}
            {/*    <MenuItem value={30}>Thirty</MenuItem>*/}
            {/*</Select>*/}
        </>
    )
})
