import useGlobalContext from "../../context/context";

const MinMaxRangeSlider = ({ gap, minTitle, maxTitle, step, title }) => {
  const { state, dispatch } = useGlobalContext();

  const changeMinValue = (e) => {
    let value = parseInt(e.target.value) || state.pricesLimits[0];
    if (value < state.pricesLimits[0]) {
      value = state.pricesLimits[0];
    }
    if (value > state.filtersState.price[1] - gap) {
      value = state.filtersState.price[1] - gap;
    }

    if (
      value === state.pricesLimits[0] &&
      state.filtersState.price[1] === state.pricesLimits[1]
    ) {
      dispatch({ type: "CLEAR_FILTER", payload: "price" });
    } else {
      const newPrice = [value, state.filtersState.price[1]];
      dispatch({
        type: "EDIT_FILTER",
        payload: { price: [...newPrice] },
      });
    }
  };

  const changeMaxValue = (e) => {
    let value = parseInt(e.target.value) || state.pricesLimits[1];
    if (value > state.pricesLimits[1]) {
      value = state.pricesLimits[1];
    }
    if (value < state.filtersState.price[0] + gap) {
      value = state.filtersState.price[0] + gap;
    }

    if (
      value === state.pricesLimits[1] &&
      state.filtersState.price[0] === state.pricesLimits[0]
    ) {
      dispatch({ type: "CLEAR_FILTER", payload: "price" });
    } else {
      const newPrice = [state.filtersState.price[0], value];
      dispatch({
        type: "EDIT_FILTER",
        payload: { price: [...newPrice] },
      });
    }
  };

  return (
    <section className="MinMaxRangeSlider-wrapper">
      {title ? <h4 className="h6">{title}</h4> : null}
      <div className="MinMaxRangeSlider-price-input">
        <div className="MinMaxRangeSlider-field">
          <span>{minTitle}</span>
          <input
            type="number"
            className="MinMaxRangeSlider-input-min"
            value={state.filtersState.price[0]}
            min={state.pricesLimits[0]}
            max={state.pricesLimits[1]}
            onChange={changeMinValue}
            step={step}
          />
        </div>
        <div className="MinMaxRangeSlider-separator">-</div>
        <div className="MinMaxRangeSlider-field">
          <span>{maxTitle}</span>
          <input
            type="number"
            className="MinMaxRangeSlider-input-max"
            value={state.filtersState.price[1]}
            min={state.pricesLimits[0]}
            max={state.pricesLimits[1]}
            onChange={changeMaxValue}
            step={step}
          />
        </div>
      </div>
      <div className="MinMaxRangeSlider-slider">
        <div
          className="MinMaxRangeSlider-progress"
          style={{
            left: `${
              ((state.filtersState.price[0] - state.pricesLimits[0]) /
                (state.pricesLimits[1] - state.pricesLimits[0])) *
              100
            }%`,
            right: `${
              100 -
              ((state.filtersState.price[1] - state.pricesLimits[0]) /
                (state.pricesLimits[1] - state.pricesLimits[0])) *
                100
            }%`,
          }}
        ></div>
      </div>
      <div className="MinMaxRangeSlider-range-input">
        <input
          type="range"
          className="MinMaxRangeSlider-range-min"
          min={state.pricesLimits[0]}
          max={state.pricesLimits[1]}
          value={state.filtersState.price[0]}
          step={step}
          onChange={changeMinValue}
        />
        <input
          type="range"
          className="MinMaxRangeSlider-range-max"
          min={state.pricesLimits[0]}
          max={state.pricesLimits[1]}
          value={state.filtersState.price[1]}
          step={step}
          onChange={changeMaxValue}
        />
      </div>
    </section>
  );
};
export default MinMaxRangeSlider;
