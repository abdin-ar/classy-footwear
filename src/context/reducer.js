import buildQuery from "../utils/buildQuery";
import setStorage from "../utils/setStorage";
import filtersDefaults from "../data/filtersDefaults";
import getActiveFilters from "../utils/getActiveFilters";
import countries from "../data/countries";

const reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const newItem = state.data.find((item) => item.id === action.payload.id);
    const selectedColor = newItem.colors.find(
      (color) => color.cid === action.payload.colorId
    );

    const newCart = [
      ...state.cart,
      {
        ...newItem,
        colors: [selectedColor],
        size: action.payload.size,
        available: action.payload.available,
        fid: `${action.payload.id}-${action.payload.colorId}-${action.payload.size}`,
        qty: 1,
      },
    ];
    setStorage("cart", newCart);
    return { ...state, cart: newCart };
  }
  if (action.type === "REMOVE_FROM_CART") {
    const newCart = state.cart.filter(
      (cartItem) => cartItem.fid !== action.payload
    );
    if (newCart.length === 0) {
      setStorage("cart");
    } else {
      setStorage("cart", newCart);
    }
    return { ...state, cart: newCart };
  }
  if (action.type === "EDIT_AMOUNT") {
    const { fid, amount } = action.payload;
    const newCart = state.cart
      .map((item) => {
        if (item.fid === fid) {
          return { ...item, qty: item.qty + amount };
        }
        return item;
      })
      .filter((item) => item.qty !== 0);
    if (newCart.length === 0) {
      setStorage("cart");
    } else {
      setStorage("cart", newCart);
    }
    return { ...state, cart: newCart };
  }
  if (action.type === "UPDATE_TOTALS") {
    let newTotal = 0;
    let newQty = 0;
    let newUndiscountedTotal = 0;
    state.cart.forEach((cartItem) => {
      const { price, qty, finalPrice } = cartItem;
      newTotal += finalPrice * qty;
      newUndiscountedTotal += price * qty;
      newQty += qty;
    });
    return {
      ...state,
      cartQty: newQty,
      cartTotal: newTotal,
      undiscountedTotal: newUndiscountedTotal,
    };
  }
  if (action.type === "OPEN_CART") {
    return { ...state, isCartOpen: true };
  }
  if (action.type === "CLOSE_CART") {
    return { ...state, isCartOpen: false };
  }
  if (action.type === "CLEAR_CART") {
    setStorage("cart");
    return { ...state, cart: [] };
  }
  if (action.type === "SET_SORT_BY") {
    return { ...state, sortBy: action.payload };
  }
  if (action.type === "EDIT_FILTER") {
    const newFilters = { ...state.filtersState, ...action.payload };
    const filters = getActiveFilters(newFilters);
    const newQuery = buildQuery(filters);
    return { ...state, filtersState: newFilters, query: newQuery };
  }
  if (action.type === "CLEAR_FILTER") {
    const newFilters = { ...state.filtersState };
    for (const filter in newFilters) {
      if (filter === action.payload) {
        newFilters[filter] = filtersDefaults[filter];
      }
    }
    const filters = getActiveFilters(newFilters);
    const newQuery = buildQuery(filters);
    return { ...state, filtersState: newFilters, query: newQuery };
  }
  if (action.type === "CLEAR_FILTERS") {
    return { ...state, filtersState: filtersDefaults, query: "" };
  }
  if (action.type === "SET_PURCHASE_DATA") {
    const currentCart = [...state.cart];
    const newCart = [];
    currentCart.forEach((item) => {
      const itemColors = item.colors[0];
      const cid = itemColors.cid;
      const color = itemColors.color;
      const hex = itemColors.hex;
      const img = itemColors.img;
      item = { ...item, cid, color, hex, img };
      const newItem = {};
      for (const key in item) {
        if (key !== "colors") {
          newItem[key] = item[key];
        }
      }
      newCart.push(newItem);
    });

    const deliveryData = {
      firstName: action.payload.fName,
      lastName: action.payload.lName,
      email: action.payload.email,
      other: action.payload.other,
      country: action.payload.country.value,
      city: action.payload.city.value,
      address: action.payload.address,
    };

    const deliveryCountry = countries.find(
      (country) => country.country === deliveryData.country
    );

    const deliveryCity = deliveryCountry.cities.find(
      (city) => city.city === deliveryData.city
    );

    const deliveryCosts = deliveryCity.deliveryCosts;

    const newPurchaseData = {
      state: "purchaseDataReady",
      cart: [...newCart],
      qty: state.cartQty,
      price: state.cartTotal,
      deliveryCosts,
      deliveryData,
      totalWithDelivery: deliveryCosts + state.cartTotal,
    };
    setStorage("purchaseData", newPurchaseData);
    return {
      ...state,
      purchaseData: { ...newPurchaseData },
    };
  }
  if (action.type === "PERFORM_PURCHASE") {
    setStorage("purchaseData");
    setStorage("cart");
    console.log({
      purchaseTime: action.payload,
      ...state.purchaseData,
      state: "DEMO PURCHASE",
    });
    return {
      ...state,
      purchaseData: {
        ...state.purchaseData,
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
      lastPurchase: {
        purchaseTime: action.payload,
        ...state.purchaseData,
        state: "DEMO PURCHASE",
      },
      cart: [],
      cartQty: 0,
      cartTotal: 0,
    };
  }
  if (action.type === "SET_PURCHASE_STEP") {
    if (action.payload === 3) {
      setStorage("step");
    } else {
      setStorage("step", action.payload);
    }
    return {
      ...state,
      purchaseStep: action.payload,
    };
  }
  if (action.type === "UPDATE_PURCHASE_DATA") {
    const currentCart = [...state.cart];
    const newCart = [];
    currentCart.forEach((item) => {
      const itemColors = item.colors[0];
      const cid = itemColors.cid;
      const color = itemColors.color;
      const hex = itemColors.hex;
      const img = itemColors.img;
      item = { ...item, cid, color, hex, img };
      const newItem = {};
      for (const key in item) {
        if (key !== "colors") {
          newItem[key] = item[key];
        }
      }
      newCart.push(newItem);
    });

    const newPurchaseData = {
      ...state.purchaseData,
      cart: [...newCart],
      qty: state.cartQty,
      price: state.cartTotal,
      totalWithDelivery: state.purchaseData.deliveryCosts + state.cartTotal,
    };
    setStorage("purchaseData", newPurchaseData);
    return {
      ...state,
      purchaseData: { ...newPurchaseData },
    };
  }

  throw new Error("No Matching Action Type");
};

export default reducer;
