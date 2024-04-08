import React from "react";
import Layout from "./Layout";
import ActivityCard from "../../share/cards/components/ActivityCard";

const Activities = () => {
  return <Layout title="Activities" card={<ActivityCard />} />;

};

export default Activities;
