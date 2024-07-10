// provinsi.jsx
import React from "react";
import data from "../../utils/constants/provinces.js";
import "./Provinsi.css";

const Provinsi = () => {
  return (
    <section id="provinsi" className="putih">
      <div className="wrapper">
        <h2>Provinsi</h2>
        <p className="global-name">Data Covid Berdasarkan Provinsi</p>
        <table className="provinsi-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Provinsi</th>
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Dirawat</th>
              <th>Meninggal</th>
            </tr>
          </thead>
          <tbody>
            {data.provinces.map((provinsi, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{provinsi.kota}</td>
                <td>{provinsi.kasus}</td>
                <td>{provinsi.sembuh}</td>
                <td>{provinsi.dirawat}</td>
                <td>{provinsi.meninggal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Provinsi;
