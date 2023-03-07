import NormalSection from "../common/NormalSection";
import ProductsList from "../products/ProductsList";
import { Link } from "react-router-dom";
import useGlobalContext from "../../context/context";

const TrendingList = () => {
  const { dispatch } = useGlobalContext();

  return (
    <NormalSection title="Trending Shoes" watermark="true">
      <ProductsList query="isTrending:true&limit:3&sort:finalPrice,number,asc" />
      <Link
        to="/products"
        onClick={() => {
          dispatch({ type: "CLEAR_FILTERS" });
          dispatch({
            type: "EDIT_FILTER",
            payload: { tags: [{ label: "Trending", value: "isTrending" }] },
          });
        }}
        className="btn bg-grey bg-95 txt-grey txt-5 h-bg-grey h-bg-80 fit-width block centered rounded py-2 px-4"
      >
        <span className="appear-on-larger-screen">See </span>All Trending
        Products...
      </Link>
    </NormalSection>
  );
};
export default TrendingList;
