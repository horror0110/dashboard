import React from "react";
import Card from "../components/Card";
import Transactions from "../components/Transactions";
import Chart from "../components/Chart";
import Rightbar from "../components/Rightbar";

const DashboardPage = () => {
  return (
    <div className="flex gap-[20px] mt-[20px]">
      <div className="flex-[3] flex flex-col gap-[20px]">
        <div className="flex gap-[20px] justify-between">
          <Card />
          <Card />
          <Card />
        </div>

        <Transactions />
        <Chart />
      </div>

      <div className="flex-1">
        <Rightbar />
      </div>
    </div>
  );
};

export default DashboardPage;
