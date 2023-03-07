import useGlobalContext from "../../context/context";
import Card from "./Card";
import CartCard from "./CartCard";
import filterData from "../../utils/filterData";
import { Link } from "react-router-dom";
import sortData from "../../utils/sortData";
import startAtData from "../../utils/startAtData";
import limitData from "../../utils/limitData";

const ProductsList = (props) => {
  const myProps = { ...props };
  for (const prop in myProps) {
    if (
      prop === "query" ||
      prop === "limit" ||
      prop === "startAt" ||
      prop === "sort" ||
      prop === "noOfResults" ||
      prop === "className" ||
      prop === "cartList" ||
      prop === "currentItemInCart" ||
      prop === "data" ||
      prop === "children"
    ) {
      delete myProps[prop];
    }
  }

  const { state } = useGlobalContext();

  function applyLimitStartSort(inputData) {
    if (props.sort) {
      sortData(inputData, props.sort[0], props.sort[1], props.sort[2]);
    }
    if (props.startAt) {
      startAtData(inputData, props.startAt);
    }
    if (props.limit) {
      limitData(inputData, props.limit);
    }
    return inputData;
  }

  let data = props.cartList ? state.cart : state.data;
  if (props.data) {
    data = props.data;
  }

  if (!props.cartList && !data) {
    return (
      <section className="mt-4">
        <p className="h4 mb-4">Failed to load products data!</p>
      </section>
    );
  }

  if (props.cartList && data.length === 0) {
    return (
      <section className="mt-4">
        <p className="h4 mb-4">Cart</p>
        <p className="h5">
          Your cart is currently empty! Start adding some items to your cart.
        </p>
        <Link
          to="/products"
          className="nav-cta bg-primary bg-50 txt-grey txt-95 h-bg-primary h-bg-80 h-txt-grey h-txt-5 rounded fit-width mt-4"
        >
          Back To Products List <i className="fas fa-arrow-right"></i>
        </Link>
      </section>
    );
  }

  if (props.query) {
    const filteredData = filterData(props.query, data);
    const filtersText = `Your query returned ${filteredData.length} result${
      filteredData.length > 1 ? "s" : ""
    }`;

    if (filteredData.length === 0) {
      return (
        <section className="mt-4">
          <p className="h4 mb-4">No items match your query!</p>
        </section>
      );
    }

    return (
      <section className="mt-4">
        {props.noOfResults ? <p className="h4 mb-4">{filtersText}</p> : null}
        <div className={`products-list ${props.className}`} {...myProps}>
          {applyLimitStartSort(filteredData).map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </div>
      </section>
    );
  }

  if (props.cartList) {
    return (
      <section className="mt-4">
        <p className="h4 mb-4">Cart</p>
        <div className={`products-list ${props.className}`} {...myProps}>
          {applyLimitStartSort(data).map((item) => {
            return <CartCard key={item.fid} {...item} />;
          })}
        </div>
      </section>
    );
  }
  if (props.currentItemInCart) {
    return (
      <section className="mt-4">
        <div className={`products-list ${props.className}`} {...myProps}>
          {applyLimitStartSort(data).map((item) => {
            return <CartCard key={item.fid} noDetailsBtn={true} {...item} />;
          })}
        </div>
      </section>
    );
  }
  return (
    <section className="mt-4">
      {props.noOfResults ? <p className="h4 mb-4">All Products</p> : null}
      <div className={`products-list ${props.className}`} {...myProps}>
        {applyLimitStartSort(data).map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
export default ProductsList;
