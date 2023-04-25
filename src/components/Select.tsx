import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import React from "react";

interface SelectOptionProps {
  label: string;
  options: string[];
  onModeChange: (event: any, value: string | null) => void;
}

export const SelectOption: React.FC<SelectOptionProps> = ({
  label,
  options,
  onModeChange,
}) => {
  return (
    <div className="select_option-container">
      <p>{label}</p>
      <Select
        defaultValue={options[0]}
        className="mode-select"
        onChange={onModeChange}
        sx={{ padding: "0 0.75rem" }}
      >
        {options.map((option, key) => (
          <Option disabled={option == "Bus"} value={option} key={key}>
            {option == "Bus" ? "Bus (Coming Soon)" : option}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectOption;
