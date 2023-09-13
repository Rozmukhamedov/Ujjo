import "./App.css";
import { Container } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./containers";

function App() {
  return (
    <Container size={"xl"}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Container>
  );
}

export default App;
