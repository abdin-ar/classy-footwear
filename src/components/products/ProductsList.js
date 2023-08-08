import useGlobalContext from "../../context/context";
import Card from "./Card";
import CartCard from "./CartCard";
import filterData from "../../utils/filterData";
import { Link } from "react-router-dom";
import sortData from "../../utils/sortData";
import startAtData from "../../utils/startAtData";
import limitData from "../../utils/limitData";

const ProductsList = ({
  query,
  limit,
  startAt,
  sort,
  noOfResults,
  className,
  cartList,
  currentItemInCart,
  data,
  children,
  ...props
}) => {
  const { state } = useGlobalContext();

  function applyLimitStartSort(inputData) {
    if (sort) {
      sortData(inputData, sort[0], sort[1], sort[2]);
    }
    if (startAt) {
      startAtData(inputData, startAt);
    }
    if (limit) {
      limitData(inputData, limit);
    }
    return inputData;
  }

  let currentData = cartList ? state.cart : state.data;
  if (data) {
    currentData = data;
  }

  if (!cartList && !currentData) {
    return (
      <section className="mt-4">
        <p className="h4 mb-4">Failed to load products data!</p>
      </section>
    );
  }

  if (cartList && currentData.length === 0) {
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

  if (query) {
    const filteredData = filterData(query, currentData);
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
        {noOfResults ? <p className="h4 mb-4">{filtersText}</p> : null}
        <div className={`products-list ${className}`} {...props}>
          {applyLimitStartSort(filteredData).map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </div>
      </section>
    );
  }

  if (cartList) {
    return (
      <section className="mt-4">
        <p className="h4 mb-4">Cart</p>
        <div className={`products-list ${className}`} {...props}>
          {applyLimitStartSort(currentData).map((item) => {
            return <CartCard key={item.fid} {...item} />;
          })}
        </div>
      </section>
    );
  }
  if (currentItemInCart) {
    return (
      <section className="mt-4">
        <div className={`products-list ${className}`} {...props}>
          {applyLimitStartSort(currentData).map((item) => {
            return <CartCard key={item.fid} noDetailsBtn={true} {...item} />;
          })}
        </div>
      </section>
    );
  }
  return (
    <section className="mt-4">
      {noOfResults ? <p className="h4 mb-4">All Products</p> : null}
      <div className={`products-list ${className}`} {...props}>
        {applyLimitStartSort(currentData).map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
export default ProductsList;
