import { useCustomization } from "../contexts/Customization";
import expandmorebtn from "../../assets/expand_more.png";
import expandlessbtn from "../../assets/expand_less.png";
import { useState } from "react";
import "../Configurator/style.css";
import "../../index.css";
import { useStore } from "../../store/store";
const Configurator = () => {
  const [showcolor, setShowcolor] = useState("hide");
  const { bikeColors, bikeColor, setBikeColor } = useCustomization();
  console.log("bikeColor", bikeColor);
  const showcoloeoptions = () => {
    if (showcolor === "hide") {
      setShowcolor("show");
    } else {
      setShowcolor("hide");
    }
  };
  return (
    <div className="configurator">
      {/* <div className="Configurator_section_title">Color</div> */}

      <div className="configurator__section">
        <div className="btnContainer">
          <button
            className="configurator__section__title"
            onClick={() => {
              //
              useStore.setState({
                openFeature: !useStore.getState().openFeature,
              });
            }}
          >
            Features
          </button>
          <button
            className="configurator__section__title"
            onClick={showcoloeoptions}
          >
            Bike color
          </button>
        </div>
        <div
          className={`configurator__section__values ${
            showcolor === "hide" ? "hidden" : ""
          }`}
        >
          <div className="item">
            <img src={expandlessbtn} alt="expandless" />
          </div>
          {bikeColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === bikeColor.color ? "item--active" : ""
              }`}
              onClick={() => setBikeColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              >
                <div className="item__label">{item.name}</div>
              </div>
            </div>
          ))}
          <div className="item">
            <img src={expandmorebtn} alt="expandless" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
