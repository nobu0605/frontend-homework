import { FC, ChangeEvent } from "react";
import Radio from "@mui/material/Radio";
import { RadioGroup as MUIRadioGroup, RadioProps } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export type RadioItem = {
  value: string | ReadonlyArray<string> | number | undefined;
  label: string;
  disabled?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "default";
};

interface Props<T> extends RadioProps {
  value: T;
  setValue: (v: T) => void;
  radioItems: RadioItem[];
  row?: boolean;
}

export function RadioGroup<T>({ value, setValue, radioItems, row }: Props<T>) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as T);
  };

  return (
    <FormControl>
      <MUIRadioGroup row={row} value={value} onChange={handleChange}>
        {radioItems.map((radioItem: RadioItem, i: number) => (
          <FormControlLabel
            key={i}
            value={radioItem.value}
            control={<Radio color={radioItem.color} />}
            label={radioItem.label}
          />
        ))}
      </MUIRadioGroup>
    </FormControl>
  );
}
