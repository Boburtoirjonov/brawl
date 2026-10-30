import { useState } from "react";
import "./style.css";
function Brawlers({ data }) {
  return (
    <>
      <div className="container">
        <h1 className="brawler">Brawlers</h1>
        <div className="brawlers">
          {data.map((value, index) => (
            <BrawlerCard key={index} value={value} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Brawlers;

function BrawlerCard({ value }) {
  const [count, setCount] = useState(1);

  function rose() {
    if (count > 10) return null;
    setCount(count + 1);
  }

  return (
    <div
      className="card"
      style={{
        background: value.background,
      }}
    >
      <img className="brawler_img" src={value.img} alt="" />
      <h2 className="name">{value.name}</h2>
      <div className="gears">
        <img
          className="gadget"
          src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9xRjR3V2dRUkpaTFZWb1N1RzRHcC5wbmcifQ:supercell:f8PXh1UTPuVo7OXFOlyFSJyF2ifndzgsrBhQ-8CCYhA?width=2400"
          alt=""
        />
        <img
          className="gear"
          src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9VVHBWQVRhZFllWHZnZWFEcUJUUi5wbmcifQ:supercell:rK1JECiCSnEg5IhHcehnCXSoC0AR_2Vs68x9ndl_HB4?width=2400"
          alt=""
        />
        <img
          className="starr_power"
          src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9IWmtMUjVpSFhiMjhiR2tZUTRnRy5wbmcifQ:supercell:huyiUL5vEn5QRW5FguBeriafcj_Sf6p8y-OHFNamp1w?width=800"
          alt=""
        />
        <img
          className="gear"
          src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9VVHBWQVRhZFllWHZnZWFEcUJUUi5wbmcifQ:supercell:rK1JECiCSnEg5IhHcehnCXSoC0AR_2Vs68x9ndl_HB4?width=2400"
          alt=""
        />
      </div>
      <div onClick={rose} className="power">
        <div className="lianer">
          <div className="small_linaner">
            <span className="power_level">{count}</span>
          </div>
        </div>
        <span className="power_point">
          {" "}
          <img
            className="power_point_img"
            src="https://th.bing.com/th/id/R.21bae522b5b3ed8a551cdadf9e3c0a82?rik=3lL0x72iPimTGw&pid=ImgRaw&r=0"
            alt=""
          />
          20
        </span>
        <span className="moneta">
          <img
            className="moneta_img"
            src="https://d13pxqgp3ixdbh.cloudfront.net/uploads/1658436504ad4837bd1756d77bc47c6c1119e1caac.png"
            alt=""
          />{" "}
          20
        </span>
      </div>
    </div>
  );
}
