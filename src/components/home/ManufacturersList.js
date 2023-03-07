import DarkSection from "../common/DarkSection";
import InfiniteScrollingLogos from "./InfiniteScrollingLogos";
import manufacturers from "../../data/manufacturers";

const ManufacturersList = () => {
  return (
    <>
      <DarkSection transitionHeight="5vw" classTop="mt-2" classBottom="mb-2">
        <div className="my-2">
          <h3 className="h4 centered my-4">Featured Brands</h3>
          <InfiniteScrollingLogos data={manufacturers} className="my-6" />
          <p className="centered justify-start my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam soluta
            quam minus atque doloremque? Officiis, doloremque eaque unde
            asperiores natus excepturi aut molestiae temporibus voluptas!
            Reprehenderit architecto modi repellat ex.
          </p>
        </div>
      </DarkSection>
    </>
  );
};
export default ManufacturersList;
