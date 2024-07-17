import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WISHLIST_TITLE_FIELD } from "../wishlist/WishlistTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const WishlistItemsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WishlistItemsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="wishlist_item_id" source="wishlistItemId" />
        <ReferenceField
          label="Wishlist"
          source="wishlist.id"
          reference="Wishlist"
        >
          <TextField source={WISHLIST_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
