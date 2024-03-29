import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
import Component5 from "./Component5";
import Component6 from "./Component6";
import "./MainLayout.css";
import Presents from "./Presents";
export default function MainLayout() {
  return (
    <div className="main-layout">
      <div className="component-container">
        <Presents />
      </div>
      <div className="component-container">
        <Component2 />
      </div>
      <div className="component-container">
        <Component3 />
      </div>
      {/* <div className="component-container" style={{ padding: 0 }}>
        <Component4 />
      </div> */}
      <div
        className="component-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Component5 />
      </div>
      <div className="component-container">
        <Component6 />
      </div>
    </div>
  );
}
