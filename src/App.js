import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/checkout" exact element={<CheckoutPage />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
