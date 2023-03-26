import { Container } from "@mui/material";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
// data
import data from "./data/data.json";
// style
import "./styles/App.scss";

const App = () => {
  return (
    <>
      <Header />
      <Container component="main" maxWidth={false} className="container">
        <Pricing data={data} yearlyDiscount={25} />
      </Container>
      <Footer />
    </>
  );
};

export default App;
