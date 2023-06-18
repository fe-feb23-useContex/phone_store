import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
// import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { Product } from './pages/Product';
import { Favorites } from './pages/Favorites';
import { Cart } from './pages/Cart';
// import { NotFound } from './pages/NotFound';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Contacts } from './pages/Contacts';
import { Rights } from './pages/Rights';

export const App = () => {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <Product />
        <div>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/category/:categoryName">
              <Route index element={<Catalog />} />
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/rights" element={<Rights />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
