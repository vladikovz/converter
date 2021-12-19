import React, {useContext, useEffect} from "react";
import {Select} from "../Select/Select";
import {observer} from "mobx-react";
import {StoreContext} from "../../context/StoreContext";

export const Container = observer(() => {
    const store = useContext(StoreContext)
    useEffect(() => {
        getData();

    }, [])



    const getData = async () => {
        await store?.dataStore.getData();
        // await store?.dataStore.convert("USD", "GBP", "15");
    }
    return(
        <section>
           <Select inputNumber={"first"}/>
           <Select inputNumber={"second"}/>
        </section>
    )
})
