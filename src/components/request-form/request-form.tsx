import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { InputField } from '@/ui/input-field';
import { Button, ButtonType } from '@/ui/button';
import type { RequestData } from '@/components/trip-request';
import styles from './request-form.module.scss';
import { useAddBookingMutation } from '@/services/api';
import { SelectField } from '@/ui/select-field/select-field';

type RequestFormProps = {
  onSubmit: (data: RequestData) => void;
  availableDates: Array<string>;
  eventName: string;
  events: Array<TouchEvent>;
};

type FormError = {
  nameError: string;
  phoneError: string;
  emailError: string;
  visitorsError: string;
  dateError: string;
};

export const RequestForm = ({ onSubmit, events }: RequestFormProps) => {
  const [data, setData] = useState<RequestData>({
    event: eventName,
    eventId: 35, //TODO: Получать Id из ивентов.
    name: '',
    phoneNumber: '',
    email: '',
    visitors: 0,
    date: ''
  });

  const [error, setError] = useState<FormError>({
    nameError: '',
    phoneError: '',
    emailError: '',
    visitorsError: '',
    dateError: '',
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
      <SelectField />
      <Button
        buttonType={ButtonType.Send}
        label="Отправить"
        extraClass={styles.button}
      />
    </form>
  );
};
