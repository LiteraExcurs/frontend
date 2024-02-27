import { useState } from 'react';
import styles from '@/ui/input-field/basic-input.module.scss';

export const SelectField = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <select className={styles.input} id="cities">
        <option value="Naples">Naples</option>
        <option value="London">London</option>
        <option value="Berlin">Berlin</option>
        <option value="New York">New York</option>
        <option value="Frattamaggiore">Frattamaggiore</option>
      </select>
    </div>
  );
};
