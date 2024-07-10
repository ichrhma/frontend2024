import React, { useEffect, useState } from "react";
import "./Global.css";

const Global = () => {
  const [globalData, setGlobalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://covid-fe-2023.vercel.app/api/global.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch global COVID-19 data");
        }
        const data = await response.json();
        setGlobalData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!globalData) {
    return <p>Loading...</p>;
  }

  const { global, regions, last_update } = globalData;

  const globalConfirmed = global
    .find((item) => item.status === "confirmed")
    .total.toLocaleString();
  const globalRecovered = global
    .find((item) => item.status === "recovered")
    .total.toLocaleString();
  const globalDeaths = global
    .find((item) => item.status === "death")
    .total.toLocaleString();

  const formattedRegions = regions.map((region) => ({
    name: region.name,
    confirmed: region.numbers.confirmed.toLocaleString(),
    recovered: region.numbers.recovered.toLocaleString(),
    death: region.numbers.death.toLocaleString(),
  }));

  return (
    <section id="global" className="abu">
      <div className="wrapper">
        <h2>Global</h2>
        <p className="global-name">Data Covid Berdasarkan Global</p>
        <div className="global-box">
          <div className="box">
            <p>Confirmed</p>
            <h3 className="hijau">{globalConfirmed}</h3>
          </div>
          <div className="box">
            <p>Recovered</p>
            <h3 className="biru">{globalRecovered}</h3>
          </div>
          <div className="box">
            <p>Deaths</p>
            <h3 className="merah">{globalDeaths}</h3>
          </div>
        </div>
        <p>Last Update: {last_update}</p>

        <h2>Regional Data</h2>
        <div className="regional-data">
          {formattedRegions.map((region) => (
            <div className="regional">
              <h3>{region.name}</h3>
              <div key={region.name} className="region-box">
                <div className="box">
                  <p>Confirmed</p>
                  <h3 className="hijau">{region.confirmed}</h3>
                </div>
                <div className="box">
                  <p>Recovered</p>
                  <h3 className="biru">{region.recovered}</h3>
                </div>
                <div className="box">
                  <p>Deaths</p>
                  <h3 className="merah">{region.death}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Global;
