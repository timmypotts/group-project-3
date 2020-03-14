import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DonorCard from "../components/DonorCard";
import API from "../utils/API";

function Donations() {
  //getting donor data to populate page

  const [data, setData] = useState({
    donors: []
  });

  const { selectedDonor, donors } = data;

  useEffect(async () => {
    API.getData().then(res => {
      if (!res) return;
      console.log(res.data);
      setData({
        donors: res.data
      });
    });
  }, []);

  // function getDonors() {
  //   API.getData()
  //     .then(res => {
  //       if (!res) return;
  //       console.log(res.data);
  //       setData({
  //         donors: res.data
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  return (
    <>
      <NavBar />
      <Header />
      <h1>Donations page</h1>
      {donors.length ? (
        <>
          {donors.map(donor => (
            <DonorCard
              key={donor.name}
              businessName={donor.businessName}
              businessAddress={donor.businessAddress}
              summary={donor.summary}
              selectDonor={() => setData({ ...data, selectedDonor: donor })}
            />
          ))}
        </>
      ) : (
        <div className="d-flex loading-spinner">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Donations;
