import { Product } from "../features/ProductSelect";
import { Select } from "../ui/Select";
import { Menu } from "../ui/Select";
import { FC } from "react";

export enum Delivery {
  Ships = "ships",
  PickUp = "pickUp",
}

const getDeliveryMenuItems = (product?: Product): Menu[] => {
  return [
    {
      value: Delivery.Ships,
      children: "Ships",
      disabled: product === Product.Car,
    },
    {
      value: Delivery.PickUp,
      children: "Pick up",
    },
  ];
};

type Props = {
  deliveryValue: Delivery | undefined;
  setDeliveryValue: (v: Delivery) => void;
  productValue?: Product;
};

export const DeliverySelect: FC<Props> = ({
  deliveryValue,
  setDeliveryValue,
  productValue,
}) => {
  return (
    <Select
      value={deliveryValue}
      setValue={setDeliveryValue}
      label="Delivery"
      menuItems={getDeliveryMenuItems(productValue)}
    />
  );
};
