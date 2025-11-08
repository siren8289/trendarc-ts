import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import { TrendDetail } from "./pages/trends/[id]/page";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout showHeader={true} showFooter={true}>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/trends/:id"
          element={
            <Layout showHeader={true} showFooter={true}>
              <TrendDetail />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
