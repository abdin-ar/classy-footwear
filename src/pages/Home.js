import Banner from "../components/home/Banner";
import NewList from "../components/home/NewList";
import ManufacturersList from "../components/home/ManufacturersList";
import TrendingList from "../components/home/TrendingList";

const Home = () => {
  return (
    <>
      <Banner />
      <NewList />
      <ManufacturersList />
      <TrendingList />
    </>
  );
};

export default Home;
