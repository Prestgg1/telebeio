import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { View } from "./View";
import { MainContext } from "./Context";
import { Loading } from "./Loading";
function App() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    /* 
    ! Burada api.jsondan tablesdeki melumatlar alınıb  Views Componentine Atılır.
    */
    const fetch = async () => {
        try {
            const response = await axios.get("http://localhost:3000/tables");
            setCards(response.data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetch();
    }, []);
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <MainContext.Provider value={{ cards, setCards }}>
                    <View />
                </MainContext.Provider>
            )}
        </>
    );
}

export default App;
