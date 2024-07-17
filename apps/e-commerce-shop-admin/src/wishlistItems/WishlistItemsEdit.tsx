import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WishlistTitle } from "../wishlist/WishlistTitle";
import { ProductTitle } from "../product/ProductTitle";

export const WishlistItemsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="wishlist_item_id"
          source="wishlistItemId"
        />
        <ReferenceInput
          source="wishlist.id"
          reference="Wishlist"
          label="Wishlist"
        >
          <SelectInput optionText={WishlistTitle} />
        </ReferenceInput>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
