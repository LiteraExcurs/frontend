import { InputField } from '@/ui/input-field';
import {ChangeEvent, useState} from 'react';

export const RequestForm = () => {
  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
    visitors: '',
    date: '',
  });

  const handleChange = (evt: any) => {
    if(evt?.target) {
      const { name, value } = evt.target;

      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

  };

  return (
    <form>
      <InputField
        name="name"
        value={data.name}
        placeholder="Как вас зовут?"
        onChange={handleChange}
      />
      <InputField
        name="phone"
        value={data.phone}
        placeholder="Телефон"
        onChange={handleChange}
      />
      <InputField
        name="email"
        value={data.email}
        placeholder="E-mail"
        onChange={handleChange}
      />
      <InputField
        name="email"
        value={data.visitors}
        placeholder="Количество посетителей"
        onChange={handleChange}
      />
      <InputField
        name="email"
        value={data.date}
        placeholder="Дата экскурсии"
        onChange={handleChange}
      />
    </form>
  );
};
