
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Inventory from './component/inventory/Inventory';
import NotFound from './component/notFound/NotFound';
import Order from './component/orderoverview/Order';
import Placeorder from './component/placeOrder/Placeorder';
import Shop from './component/Shop/Shop';

function App() {
  return (
   <div>
     <BrowserRouter>
        <Header></Header>
      <Switch>
        <Route  path="/shop">
        <Shop></Shop>
        </Route>
        <Route  path="/review">
        <Order></Order>
        </Route>
        <Route  path="/inventory">
        <Inventory></Inventory>
        </Route>
        <Route path="/placeorder">
          <Placeorder></Placeorder>
        </Route>
        <Route exact path="/">
        <Shop></Shop>
        </Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
     </BrowserRouter>
     
     
   </div>
    
  );
}

export default App;
