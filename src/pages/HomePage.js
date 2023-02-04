import React from "react";
import Ammount from "../components/Ammount";
import AmmountDiscount from "../components/AmmountDiscount";
import Card from "../components/Card";
import Layout from "../layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 shadow-lg">
          <Card />
        </div>
        <div>
          <Ammount/>
          <div className="mt-4">
          <AmmountDiscount/>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
