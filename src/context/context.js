import React, { useEffect, useReducer, useContext } from "react";
import reducer from "./reducer";
import localData from "../data/localData";
import pricesFilterLimits from "../data/pricesFilterLimits";
import addFinalPrices from "../utils/addFinalPrices";
import getAllColors from "../utils/getAllColors";
import getAllSizes from "../utils/getAllSizes";
import sortByOptions from "../data/sortByOptions";
import getStorage from "../utils/getStorage";
import filtersDefaults from "../data/filtersDefaults";

const defaultState = {
  purchaseStep: getStorage("step") || 1,
  data: addFinalPrices(localData),
  sortBy: sortByOptions[0],
  allColors: getAllColors(localData),
  allSizes: getAllSizes(localData),
  pricesLimits: pricesFilterLimits,
  isSearching: false,
  filtersState: filtersDefaults,
  query: "",
  cart: getStorage("cart") || [],
  isCartOpen: false,
  cartQty: 0,
  cartTotal: 0,
  purchaseData: getStorage("purchaseData") || {
    state: "initial",
    cart: [],
    qty: 0,
    price: 0,
    deliveryCosts: 0,
    deliveryData: {
      fName: "",
      lName: "",
      email: "",
      other: "",
      country: undefined,
      city: undefined,
      address: "",
    },
    totalWithDelivery: 0,
  },
  lastPurchase: {},
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    dispatch({ type: "UPDATE_TOTALS" });
  }, [state.cart]);

  const addToCart = (id, colorId, size, available) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, colorId, size, available },
    });
  };

  const removeFromCart = (id, colorId, size) => {
    const fid = `${id}-${colorId}-${size}`;
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: fid,
    });
  };

  const increase = (id, colorId, size, available) => {
    const fid = `${id}-${colorId}-${size}`;
    const itemInCart = state.cart.find((item) => item.fid === fid);
    if (itemInCart && itemInCart.qty === available) {
      return;
    }
    dispatch({
      type: "EDIT_AMOUNT",
      payload: { fid, amount: 1 },
    });
  };

  const decrease = (id, colorId, size) => {
    dispatch({
      type: "EDIT_AMOUNT",
      payload: { fid: `${id}-${colorId}-${size}`, amount: -1 },
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        removeFromCart,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
export default useGlobalContext;
