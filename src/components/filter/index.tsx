import './styles.css';
import FlatPicker from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import flatpickrlib from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import { useState } from 'react';
import { Gender, FilterData } from '../../types';

flatpickrlib.localize(Portuguese);

type Props = {
  onFilterChange: (filter: FilterData) => void;
};
function Filter({ onFilterChange }: Props) {
  const [dates, setDates] = useState<Date[]>([]);
  const [gender, setGender] = useState<Gender>();

  const onDateChange = (dates: Date[]) => {
    if (dates.length === 2) {
      setDates(dates);
      onFilterChange({ dates, gender });
    }
    console.log(dates);
  };

  const onChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGender = event.target.value as Gender;
    setGender(selectedGender);
    onFilterChange({ dates, gender: selectedGender });
  };

  return (
    <div className="filter-container base-card">
      <FlatPicker
        options={{
          mode: 'range',
          dateFormat: 'd/m/Y',
          showMonths: 2
        }}
        className="filter-input"
        onChange={onDateChange}
        placeholder={'Selecione um período'}
      />

      <select className="filter-input" value={gender} onChange={onChangeGender}>
        <option value="">Selecione um gênero</option>
        <option value="MALE">Masculino</option>
        <option value="FEMALE">Feminino</option>
        <option value="OTHER">Outro</option>
      </select>
    </div>
  );
}

export default Filter;
