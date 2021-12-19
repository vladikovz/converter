import './App.css';
import React from "react";
import {Container} from "./components/Conteiner/Container";
import {MainStoreP, StoreContext} from "./context/StoreContext";


function App() {
    // const store = new MainStore();
    return (
        <StoreContext.Provider value={MainStoreP}>
            <div className="App">
                <Container/>
            </div>
        </StoreContext.Provider>
        // <Provider store={store}>

        // </Provider>
    );
}

export default App;
