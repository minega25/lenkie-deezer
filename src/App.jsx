import React from "react";
import store from "./redux/store";
import Layout from "./components/Layout";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Layout>lorem</Layout>
    </Provider>
  );
}

export default App;
