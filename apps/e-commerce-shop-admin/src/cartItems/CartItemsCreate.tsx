import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ShoppingCartTitle } from "../shoppingCart/ShoppingCartTitle";
import { ProductTitle } from "../product/ProductTitle";

export const CartItemsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="cart_item_id" source="cartItemId" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <ReferenceInput
          source="shoppingCart.id"
          reference="ShoppingCart"
          label="ShoppingCart"
        >
          <SelectInput optionText={ShoppingCartTitle} />
        </ReferenceInput>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
