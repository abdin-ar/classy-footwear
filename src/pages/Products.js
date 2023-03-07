import useGlobalContext from "../context/context";
import ProductsList from "../components/products/ProductsList";
import FiltersSection from "../components/products/FiltersSection";

const Products = () => {
  const { state } = useGlobalContext();
  return (
    <>
      <FiltersSection />
      <ProductsList
        query={state.query}
        noOfResults={true}
        sort={state.sortBy.value}
      />
    </>
  );
};

export default Products;
