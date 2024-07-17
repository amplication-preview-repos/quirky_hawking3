import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  NumberInput,
  ReferenceArrayInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";
import { ReviewsTitle } from "../reviews/ReviewsTitle";
import { WishlistTitle } from "../wishlist/WishlistTitle";
import { ShoppingCartTitle } from "../shoppingCart/ShoppingCartTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Username" source="username" />
        <TextInput label="Email" source="email" type="email" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="phone_number" source="phoneNumber" />
        <TextInput label="address" source="address" />
        <NumberInput step={1} label="user_id" source="userId" />
        <TextInput label="password_hash" source="passwordHash" />
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="reviewsItems"
          reference="Reviews"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReviewsTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="wishlists"
          reference="Wishlist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WishlistTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="shoppingCarts"
          reference="ShoppingCart"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ShoppingCartTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
