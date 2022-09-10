import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import Authentication from './routes/authentication/authentication';
import Checkout from './routes/checkout/checkout';
import Shop from './routes/shop/shop';
import { checkUserSession } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(checkUserSession());
    if (checkUserSession) {
      navigate("/")
    }
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;