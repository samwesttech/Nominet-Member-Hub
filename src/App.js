import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import MountainImage from "./assets/Mask_Group_5.png";
import PresentationImage from "./assets/Mask_Group_6.png";
import CameraImage from "./assets/Mask_Group_7.png";
import MonitorImage from "./assets/Mask_Group_7_cp.png";
import PhoneImage from "./assets/Mask_Group_7_c.png";

function App() {
  return (
    <div className="app">
      <div className="grey-bar">
        <p> nominet.uk</p>
      </div>

      <Nav />

      <Banner />
      <div className="tile-large">
        <div className="tile">
          <img src={MountainImage} />
          <div className="text-box">
            <div className="text-box-left">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                id egestas dolor, vitae vehicula quam. Proin in nunc elementum,
                varius sem vel, fringilla mi. Donec vitae risus tincidunt,
                luctus augue sed, ultrices est.
              </p>
            </div>
            <div className="text-box-right">
              <p>FEATURED</p>
            </div>
          </div>
        </div>

        <div className="tile">
          <img src={PresentationImage} />
          <div className="text-box">
            <div className="text-box-left">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                id egestas dolor, vitae vehicula quam. Proin in nunc elementum,
                varius sem vel, fringilla mi. Donec vitae risus tincidunt,
                luctus augue sed, ultrices est.
              </p>
            </div>
            <div className="text-box-right">
              <p>NEW</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Line-Link">
        <hr></hr>
        <p>Latest Videos</p>
        <a>Browse all Videos</a>
      </div>

      <div className="tile-small">
        <div className="tile">
          <img src={CameraImage} />
          <div className="text-box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              egestas dolor, vitae vehicula quam. Proin in nunc elementum,
              varius sem vel, fringilla mi. Donec vitae risus tincidunt, luctus
              augue sed, ultrices est.
            </p>
          </div>
        </div>
        <div className="tile">
          <img src={MonitorImage} />
          <div className="text-box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              egestas dolor, vitae vehicula quam. Proin in nunc elementum,
              varius sem vel, fringilla mi. Donec vitae risus tincidunt, luctus
              augue sed, ultrices est.
            </p>
          </div>
        </div>
        <div className="tile">
          <img src={PhoneImage} />
          <div className="text-box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              egestas dolor, vitae vehicula quam. Proin in nunc elementum,
              varius sem vel, fringilla mi. Donec vitae risus tincidunt, luctus
              augue sed, ultrices est.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
