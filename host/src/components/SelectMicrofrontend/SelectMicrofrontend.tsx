import { charactersMap } from "../../domain/characters";
import { Characters, charactersNames } from "../../domain/models/characters";
import { StyledSelect } from "./styled";

interface SelectMicrofrontendProps {
  onSelect: (microfront: Characters) => void;
}

const SelectMicrofrontend = ({ onSelect }: SelectMicrofrontendProps) => {
  return (
    <StyledSelect onChange={(e) => onSelect(e.target.value as Characters)}>
      {Object.keys(charactersMap).map((key) => (
        <option className="--option" key={key} value={key}>
          {charactersNames[key as keyof typeof charactersNames]}
        </option>
      ))}
    </StyledSelect>
  );
};

export default SelectMicrofrontend;
