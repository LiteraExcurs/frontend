import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { InputField } from '@/ui/input-field';
import { Button, ButtonType } from '@/ui/button';
import type { RequestData } from '@/components/trip-request';

import styles from './request-form.module.scss';
import { useAddBookingMutation } from '@/services/api';

type RequestFormProps = {
  onSubmit: (data: RequestData) => void;
  availableDates: Array<string>;
  eventName: string;
  eventId: string;
};

type FormError = {
  nameError: string;
  phoneError: string;
  emailError: string;
  visitorsError: string;
  dateError: string;
};

export const RequestForm = ({
  onSubmit,
  eventName,
  eventId,
  availableDates,
}: RequestFormProps) => {
  const [data, setData] = useState<RequestData>({
    event: eventName,
    eventId: 35, //TODO: Получать Id из ивентов.
    name: '',
    phoneNumber: '',
    email: '',
    visitors: 0,
    date: availableDates.join(', '),
  });

  const [error, setError] = useState<FormError>({
    nameError: '',
    phoneError: '',
    emailError: '',
    visitorsError: '',
    dateError: '',
  });
  const formRef = useRef<HTMLFormElement | null>(null);
    console.log(data)
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt?.target) {
      const { name, value } = evt.target;
      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const [addBooking, { isError }] = useAddBookingMutation();
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    onSubmit(data);
    addBooking(data);
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
        name="phoneNumber"
        value={data.phoneNumber}
        placeholder="Телефон"
        onChange={handleChange}
      />
      <InputField
        name="email"
        value={data.email}
        placeholder="E-mail"
        onChange={handleChange}
      />
{/*      <InputField
        name="visitors"
        value={data.visitors}
        placeholder="Количество посетителей"
        onChange={handleChange}
      />*/}
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
