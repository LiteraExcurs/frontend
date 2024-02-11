import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { InputField } from '@/ui/input-field';
import { Button, ButtonType } from '@/ui/button';
import type { RequestData } from '@/components/trip-request';

import styles from './request-form.module.scss';

type RequestFormProps = {
  onSubmit: (data: RequestData) => void;
  availableDates: Array<string>;
};

export const RequestForm = ({ onSubmit, availableDates }: RequestFormProps) => {
  const [data, setData] = useState<RequestData>({
    name: '',
    phone: '',
    email: '',
    visitors: '',
    date: availableDates.join(', '),
  });
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt?.target) {
      const { name, value } = evt.target;

      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    onSubmit(data);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
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
        name="visitors"
        value={data.visitors}
        placeholder="Количество посетителей"
        onChange={handleChange}
      />
      <InputField
        name="date"
        value={data.date}
        placeholder="Дата экскурсии"
        onChange={handleChange}
      />
      <Button
        buttonType={ButtonType.Send}
        label="Отправить"
        extraClass={styles.button}
      />
    </form>
  );
};
