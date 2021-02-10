import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import MountainImage from "./assets/Mask_Group_5.png";
import PresentationImage from "./assets/Mask_Group_6.png";
import CameraImage from "./assets/Mask_Group_7.png";
import MonitorImage from "./assets/Mask_Group_7_cp.png";
import PhoneImage from "./assets/Mask_Group_7_c.png";
import CoffeeImage from "./assets/Nominet_Hub_POST_GRID_Layers_0.png";
import DeskImage from "./assets/Mask_Group_7_f.png";
import LightImage from "./assets/Mask_Group_7_hg.png";
import BuildingImage from "./assets/Mask_Group_7_h.png";
import SignUpBanner from "./components/SignUpBanner";
import RegisterBanner from "./components/RegisterBanner";
import Footer from "./components/Footer";
import BannerMobile from "./components/BannerMobile";

function App() {
  return (
    <div className="app">
      <div className="grey-bar">
        <p> &lt; nominet.uk</p>
      </div>

      <Nav />

      <Banner />
      <BannerMobile />
      <div className="tile-large">
        <div className="tile">
          <img src={MountainImage} />

          <div className="text-box">
            <div className="text-box-left">
              <div className="tile-header">
                <a className="fa fa-play-circle"> </a>
                <div className="tile-header-text">
                  <h4>Videos</h4>
                  <p>3rd December 2020</p>
                </div>
              </div>

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
          {/* <div className="header-img">
            <p>10th September 2021</p>
          </div> */}
          <div className="text-box">
            <div className="text-box-left">
              <div className="tile-header">
                <a className="fa fa-ticket"> </a>
                <div className="tile-header-text">
                  <h4>Events</h4>
                  <p>
                    {" "}
                    <br></br>
                  </p>
                </div>
              </div>

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
            <div className="tile-header">
              <a className="fa fa-play-circle"> </a>
              <div className="tile-header-text">
                <h4>Videos</h4>
                <p>5th December 2020</p>
              </div>
            </div>

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
            <div className="tile-header">
              <a className="fa fa-play-circle"> </a>
              <div className="tile-header-text">
                <h4>Videos</h4>
                <p>4th December 2020</p>
              </div>
            </div>
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
            <div className="tile-header">
              <a className="fa fa-play-circle"> </a>
              <div className="tile-header-text">
                <h4>Videos</h4>
                <p>3rd December 2020</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              egestas dolor, vitae vehicula quam. Proin in nunc elementum,
              varius sem vel, fringilla mi. Donec vitae risus tincidunt, luctus
              augue sed, ultrices est.
            </p>
          </div>
        </div>
      </div>

      <SignUpBanner />

      <div className="Line-Link">
        <hr></hr>
        <p>Latest News & Insights</p>
        <a>Browse all News & Insights</a>
      </div>

      <div className="tile-small">
        <div className="tile">
          <img src={CoffeeImage} />
          <div className="text-box">
            <div className="tile-header">
              <a className="fa fa-newspaper-o"> </a>
              <div className="tile-header-text">
                <h4>News and Insights</h4>
                <p>5th December 2020</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              egestas dolor, vitae vehicula quam. Proin in nunc elementum,
              varius sem vel, fringilla mi. Donec vitae risus tincidunt, luctus
              augue sed, ultrices est.
            </p>
          </div>
        </div>
        <div className="tile">
          <img src={MountainImage} />
          <div className="text-box">
            <div className="tile-header">
              <a className="fa fa-newspaper-o"> </a>
              <div className="tile-header-text">
                <h4>News & Insights</h4>
                <p>4th December 2020</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              egestas dolor, vitae vehicula quam. Proin in nunc elementum,
              varius sem vel, fringilla mi. Donec vitae risus tincidunt, luctus
              augue sed, ultrices est.
            </p>
          </div>
        </div>
        <div className="tile">
          <img src={DeskImage} />
          <div className="text-box">
            <div className="tile-header">
              <a className="fa fa-newspaper-o"> </a>
              <div className="tile-header-text">
                <h4>News & Insights</h4>
                <p>3rd December 2020</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              egestas dolor, vitae vehicula quam. Proin in nunc elementum,
              varius sem vel, fringilla mi. Donec vitae risus tincidunt, luctus
              augue sed, ultrices est.
            </p>
          </div>
        </div>
      </div>

      <div className="Line-Link">
        <hr></hr>
        <p>Upcoming Events</p>
        <a>Browse all Events</a>
      </div>

      <div className="tile-small">
        <div className="tile">
          <img src={PresentationImage} />
          <div className="text-box">
            <div className="tile-header">
              <a className="fa fa-ticket"> </a>
              <div className="tile-header-text">
                <h4>Events</h4>
                <p>
                  <br></br>
                </p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              egestas dolor, vitae vehicula quam. Proin in nunc elementum,
              varius sem vel, fringilla mi. Donec vitae risus tincidunt, luctus
              augue sed, ultrices est.
            </p>
          </div>
        </div>
        <div className="tile">
          <img src={LightImage} />
          <div className="text-box">
            <div className="tile-header">
              <a className="fa fa-ticket"> </a>
              <div className="tile-header-text">
                <h4>Events</h4>
                <p>
                  <br></br>
                </p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              egestas dolor, vitae vehicula quam. Proin in nunc elementum,
              varius sem vel, fringilla mi. Donec vitae risus tincidunt, luctus
              augue sed, ultrices est.
            </p>
          </div>
        </div>
        <div className="tile">
          <img src={BuildingImage} />
          <div className="text-box">
            <div className="tile-header">
              <a className="fa fa-ticket"> </a>
              <div className="tile-header-text">
                <h4>Events</h4>
                <p>
                  <br></br>
                </p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              egestas dolor, vitae vehicula quam. Proin in nunc elementum,
              varius sem vel, fringilla mi. Donec vitae risus tincidunt, luctus
              augue sed, ultrices est.
            </p>
          </div>
        </div>
      </div>
      <RegisterBanner />
      <Footer />
    </div>
  );
}

export default App;
