import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import React from "react";
import styled from "@emotion/styled";

const Style = styled.div`
  .label {
    text-align: center;
  }
`;

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
    <Style>
      <div className="select_option-container">
        <p className="label">{label}</p>
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
    </Style>
  );
};

export default SelectOption;
