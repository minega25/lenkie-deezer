import React from "react";
import Layout from "../components/Layout";

function Artist({ artistId }) {
  return (
    <Layout>
      <p>{artistId}</p>
    </Layout>
  );
}

export default Artist;
