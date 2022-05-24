import React from "react";
import store from "./redux/store";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";

const ChildComponent = ({ children }) => {
  const res = useSelector((state) => state);
  console.log("res :>> ", res);
  return <div>{children}</div>;
};

function App() {
  return (
    <Provider store={store}>
      <ChildComponent>lorem</ChildComponent>
    </Provider>
  );
}

export default App;
