import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Catalogue from './components/Catalogue';
import Home from './components/Home';
import AccountLanding from './components/AccountLanding';
import PaymentPlan from './components/PaymentPlan';
import SingleProduct from './components/SingleProduct'

function App() {
  return (
    <>
    <NavBar />
    <hr />
    <Routes>
      <Route index element={<Home />} />
      <Route path="account" element={<AccountLanding />}>
        <Route path="billing" element={<PaymentPlan />} />
        <Route path="purchased" element={<div>All my purchased products</div>}/>
      </Route>
      <Route path="catalogue" element={<Catalogue />}>
        <Route path="post/:id" element={<SingleProduct />} />
      </Route>
      <Route path="support" element={<div>Please contact us on 123 4567-8900</div>} />
    </Routes>
    </>
  );
}

export default App;
