import { BrowserRouter } from "react-router-dom";
import Navigations from "./Routes/Navigation";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigations />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
