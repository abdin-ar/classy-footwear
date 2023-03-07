import { useState, useEffect, useRef } from "react";
import useGlobalContext from "../../context/context";
import MinMaxRangeSlider from "../form/MinMaxRangeSlider";
import sortByOptions from "../../data/sortByOptions";
import SelectMultiKBD from "../form/SelectMultiKBD";

const FiltersSection = () => {
  const { state, dispatch } = useGlobalContext();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const container = useRef();
  const content = useRef();

  function setContainerHeight(openState) {
    if (openState === true) {
      container.current.style.height = `${
        content.current.getBoundingClientRect().height
      }px`;
    } else {
      container.current.style.height = "0px";
    }
  }

  useEffect(() => {
    if (isFiltersOpen) {
      setContainerHeight(true);
      window.addEventListener("resize", resizeHandler);
    } else {
      setContainerHeight(false);
      window.removeEventListener("resize", resizeHandler);
    }
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isFiltersOpen, JSON.stringify(state.filtersState)]);

  function resizeHandler() {
    setIsFiltersOpen(false);
    setContainerHeight(false);
  }

  const tagsOptions = [
    { label: "New", value: "isNew" },
    { label: "Trending", value: "isTrending" },
    { label: "Discounted", value: "isDiscounted" },
  ];

  const toggleTags = (e) => {
    dispatch({ type: "EDIT_FILTER", payload: { tags: e } });
  };

  const typeOptions = [
    { label: "Formal", value: "formal" },
    { label: "Sports", value: "sports" },
  ];

  const toggleType = (e) => {
    dispatch({ type: "EDIT_FILTER", payload: { type: e } });
  };

  const toggleColors = (e) => {
    dispatch({ type: "EDIT_FILTER", payload: { colors: e } });
  };

  const toggleSizes = (e) => {
    dispatch({ type: "EDIT_FILTER", payload: { sizes: e } });
  };

  const toggleSortBy = (e) => {
    if (e === undefined) {
      dispatch({ type: "SET_SORT_BY", payload: sortByOptions[0] });
    } else {
      dispatch({ type: "SET_SORT_BY", payload: e });
    }
  };

  return (
    <article className="py-4 bg-primary bg-80 transition">
      <div className="flexed between filters-buttons">
        <button
          className="btn h5 flexed center"
          onClick={() => {
            setIsFiltersOpen((prev) => !prev);
          }}
        >
          <i
            className={`fas fa-chevron-down filters-btn transition full-height ${
              isFiltersOpen ? "filters-btn-close" : ""
            }`}
          ></i>
          Filters
        </button>
        {state.query ? (
          <button
            className="btn h-txt-error h-txt-50"
            onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
          >
            <i className="fas fa-times"></i> Clear All
            <span className="appear-on-larger-screen"> Filters</span>
          </button>
        ) : null}
      </div>
      <div
        className={`filters-body ${isFiltersOpen ? "open" : ""}`}
        ref={container}
      >
        <div
          className={`filters-section ${isFiltersOpen ? "open" : ""}`}
          ref={content}
        >
          <SelectMultiKBD
            multiple
            value={state.filtersState.tags}
            onChange={toggleTags}
            options={tagsOptions}
            title="Tags"
            placeholder="Any tag"
          />
          <SelectMultiKBD
            value={state.filtersState.type}
            onChange={toggleType}
            options={typeOptions}
            title="Type"
            placeholder="Any type"
          />
          <SelectMultiKBD
            multiple
            value={state.filtersState.colors}
            onChange={toggleColors}
            options={state.allColors.options}
            title="Colors"
            placeholder="Any color"
          />
          <SelectMultiKBD
            multiple
            value={state.filtersState.sizes}
            onChange={toggleSizes}
            options={state.allSizes.options}
            title="Sizes"
            placeholder="Any size"
          />
          <MinMaxRangeSlider
            gap={1500}
            title="Price $"
            minTitle="Min:"
            maxTitle="Max:"
            step={100}
          />
          <SelectMultiKBD
            value={state.sortBy}
            onChange={toggleSortBy}
            options={sortByOptions}
            title="Sort By"
            placeholder="Not Sorted"
          />
        </div>
      </div>
    </article>
  );
};
export default FiltersSection;
