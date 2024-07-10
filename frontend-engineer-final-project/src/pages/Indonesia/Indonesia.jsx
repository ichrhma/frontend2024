import React, { useEffect, useState } from "react";
import "./Indonesia.css";

const indonesia = () => {
  const [indonesiaData, setindonesiaData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://covid-fe-2023.vercel.app/api/indonesia.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch indonesia COVID-19 data");
        }
        const data = await response.json();
        setindonesiaData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!indonesiaData) {
    return <p>Loading...</p>;
  }

  const { indonesia, regions, last_update } = indonesiaData;

  const indonesiaConfirmed = indonesia
    .find((item) => item.status === "confirmed")
    .total.toLocaleString();
  const indonesiaRecovered = indonesia
    .find((item) => item.status === "recovered")
    .total.toLocaleString();
  const indonesiaDeaths = indonesia
    .find((item) => item.status === "death")
    .total.toLocaleString();

  const formattedRegions = regions.map((province) => ({
    name: province.name,
    confirmed: province.numbers.confirmed.toLocaleString(),
    recovered: province.numbers.recovered.toLocaleString(),
    death: province.numbers.death.toLocaleString(),
  }));

  return (
    <section id="indonesia" className="abu">
      <div className="wrapper">
        <h2>indonesia</h2>
        <p className="indonesia-name">Data Covid Berdasarkan indonesia</p>
        <div className="indonesia-box">
          <div className="box">
            <p>Confirmed</p>
            <h3 className="hijau">{indonesiaConfirmed}</h3>
          </div>
          <div className="box">
            <p>Recovered</p>
            <h3 className="biru">{indonesiaRecovered}</h3>
          </div>
          <div className="box">
            <p>Deaths</p>
            <h3 className="merah">{indonesiaDeaths}</h3>
          </div>
        </div>
        <p>Last Update: {last_update}</p>

        <h2>Data Provinsi</h2>
        <div className="regional-data">
          {formattedRegions.map((province) => (
            <div className="regional">
              <h3>{province.name}</h3>
              <div key={province.name} className="region-box">
                <div className="box">
                  <p>Confirmed</p>
                  <h3 className="hijau">{province.confirmed}</h3>
                </div>
                <div className="box">
                  <p>Recovered</p>
                  <h3 className="biru">{province.recovered}</h3>
                </div>
                <div className="box">
                  <p>Deaths</p>
                  <h3 className="merah">{province.death}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default indonesia;
