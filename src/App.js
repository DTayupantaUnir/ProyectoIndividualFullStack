import { useState } from "react";
import GlobalRouter from "./routes/GlobalRouter";
import {OlimpusContext} from "./context/OlimpusContext";
import {Footer} from "./components/Footer";
import {useProducts} from "./hooks/useProducts";
import { useCart } from './hooks/useCart';

function App() {

    const products = useProducts();
    const productsSelected = useCart();
    const [wishList, setItemtoWishList] = useState([]);
   


  let addItemtoWishList = (item) => {
    setItemtoWishList(wishList.concat(item));
  };
 

    return (
        <OlimpusContext.Provider value={{products,productsSelected,wishList,addItemtoWishList }}>
            <GlobalRouter></GlobalRouter>
            <Footer />
        </OlimpusContext.Provider>
    );
}

export default App;
