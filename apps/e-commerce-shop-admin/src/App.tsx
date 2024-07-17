import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { OrderItemList } from "./orderItem/OrderItemList";
import { OrderItemCreate } from "./orderItem/OrderItemCreate";
import { OrderItemEdit } from "./orderItem/OrderItemEdit";
import { OrderItemShow } from "./orderItem/OrderItemShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { ShoppingCartList } from "./shoppingCart/ShoppingCartList";
import { ShoppingCartCreate } from "./shoppingCart/ShoppingCartCreate";
import { ShoppingCartEdit } from "./shoppingCart/ShoppingCartEdit";
import { ShoppingCartShow } from "./shoppingCart/ShoppingCartShow";
import { WishlistList } from "./wishlist/WishlistList";
import { WishlistCreate } from "./wishlist/WishlistCreate";
import { WishlistEdit } from "./wishlist/WishlistEdit";
import { WishlistShow } from "./wishlist/WishlistShow";
import { CartItemsList } from "./cartItems/CartItemsList";
import { CartItemsCreate } from "./cartItems/CartItemsCreate";
import { CartItemsEdit } from "./cartItems/CartItemsEdit";
import { CartItemsShow } from "./cartItems/CartItemsShow";
import { WishlistItemsList } from "./wishlistItems/WishlistItemsList";
import { WishlistItemsCreate } from "./wishlistItems/WishlistItemsCreate";
import { WishlistItemsEdit } from "./wishlistItems/WishlistItemsEdit";
import { WishlistItemsShow } from "./wishlistItems/WishlistItemsShow";
import { PaymentsList } from "./payments/PaymentsList";
import { PaymentsCreate } from "./payments/PaymentsCreate";
import { PaymentsEdit } from "./payments/PaymentsEdit";
import { PaymentsShow } from "./payments/PaymentsShow";
import { ReviewsList } from "./reviews/ReviewsList";
import { ReviewsCreate } from "./reviews/ReviewsCreate";
import { ReviewsEdit } from "./reviews/ReviewsEdit";
import { ReviewsShow } from "./reviews/ReviewsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ECommerceShop"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="OrderItem"
          list={OrderItemList}
          edit={OrderItemEdit}
          create={OrderItemCreate}
          show={OrderItemShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="ShoppingCart"
          list={ShoppingCartList}
          edit={ShoppingCartEdit}
          create={ShoppingCartCreate}
          show={ShoppingCartShow}
        />
        <Resource
          name="Wishlist"
          list={WishlistList}
          edit={WishlistEdit}
          create={WishlistCreate}
          show={WishlistShow}
        />
        <Resource
          name="CartItems"
          list={CartItemsList}
          edit={CartItemsEdit}
          create={CartItemsCreate}
          show={CartItemsShow}
        />
        <Resource
          name="WishlistItems"
          list={WishlistItemsList}
          edit={WishlistItemsEdit}
          create={WishlistItemsCreate}
          show={WishlistItemsShow}
        />
        <Resource
          name="Payments"
          list={PaymentsList}
          edit={PaymentsEdit}
          create={PaymentsCreate}
          show={PaymentsShow}
        />
        <Resource
          name="Reviews"
          list={ReviewsList}
          edit={ReviewsEdit}
          create={ReviewsCreate}
          show={ReviewsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
