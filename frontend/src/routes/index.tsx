import { BrowserRouter, Route, Routes as DOMRoutes } from 'react-router-dom';
import { ContentContainer } from '../components/ContentContainer';

import { Header } from '../components/Header';

import AddDeliveryman from '../pages/deliverymans/Add';
import DeliveryMansList from '../pages/deliverymans/List';

import Login from '../pages/Login';

const AppRoutes = () => (
  <>
    <Header />
    <ContentContainer>
      <DOMRoutes>
        <Route path="entregadores" element={<DeliveryMansList />} />
        <Route path="entregadores/novo" element={<AddDeliveryman />} />
      </DOMRoutes>
    </ContentContainer>
  </>
);

const AuthRoutes = () => (
  <DOMRoutes>
    <Route path="/" element={<Login />} />
  </DOMRoutes>
);

export const Routes = () => {
  const logged = true;

  return (
    <BrowserRouter>{logged ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
};
