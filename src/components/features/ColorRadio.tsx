import { RadioItem } from "../ui/RadioGroup";
import { RadioGroup } from "../ui/RadioGroup";
import { FC } from "react";

export enum Color {
  Red = "red",
  Green = "Green",
}

export const colorItems: RadioItem[] = [
  {
    value: Color.Red,
    label: "Red",
    color: "error",
  },
  {
    value: Color.Green,
    label: "Green",
    color: "success",
  },
];

type Props = {
  value: Color;
  setValue: (v: Color) => void;
};

export const ColorRadio: FC<Props> = ({ value, setValue }) => {
  return (
    <RadioGroup row value={value} setValue={setValue} radioItems={colorItems} />
  );
};
