import { charactersMap } from "../domain/characters";
import { Characters, charactersNames } from "../domain/models/characters";

interface SelectMicrofrontendProps {
  onSelect: (microfront: Characters) => void;
}

const SelectMicrofrontend = ({ onSelect }: SelectMicrofrontendProps) => {
  return (
    <select onChange={(e) => onSelect(e.target.value as Characters)}>
      {Object.keys(charactersMap).map((key) => (
        <option key={key} value={key}>
          {charactersNames[key as keyof typeof charactersNames]}
        </option>
      ))}
    </select>
  );
};

export default SelectMicrofrontend;
