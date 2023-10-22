import { Select } from "../ui/Select";
import { Menu } from "../ui/Select";
import { FC } from "react";

export enum Product {
  PC = "pc",
  Flower = "flower",
  Car = "car",
}

export const productMenuItems: Menu[] = [
  {
    value: Product.PC,
    children: "PC",
  },
  {
    value: Product.Flower,
    children: "Flower",
  },
  {
    value: Product.Car,
    children: "Car",
  },
];

type Props = {
  value: Product | undefined;
  setValue: (v: Product) => void;
};

export const ProductSelect: FC<Props> = ({ value, setValue }) => {
  return (
    <Select
      value={value}
      setValue={setValue}
      label="Product"
      menuItems={productMenuItems}
    />
  );
};
