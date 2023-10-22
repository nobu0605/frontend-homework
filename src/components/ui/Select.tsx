import { ReactNode } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {
  Select as MUISelect,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";

export type Menu = {
  value: string | number | undefined;
  children: ReactNode;
  disabled?: boolean;
};

interface Props<T> extends SelectProps {
  value: T | undefined;
  setValue: (v: T) => void;
  label: string;
  menuItems: Menu[];
}

export function Select<T>({ value, setValue, label, menuItems }: Props<T>) {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as T);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <MUISelect value={value ? String(value) : ""} onChange={handleChange}>
        {menuItems.map((menuItem: Menu, i: number) => (
          <MenuItem disabled={menuItem.disabled} key={i} value={menuItem.value}>
            {menuItem.children}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
}
