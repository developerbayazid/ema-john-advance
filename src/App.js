import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotMatch from "./components/NotMatch/NotMatch";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="shop" />} />
        <Route path="shop" element={<Shop />} />
        <Route path="order" element={<Review />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="product/:productKey/:productName" element={<ProductDetails />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
}

export default App;
