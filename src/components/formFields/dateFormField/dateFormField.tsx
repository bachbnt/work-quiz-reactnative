import React, { useMemo, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { capitalize } from 'lodash';
import DatePicker from '@src/components/datePicker';
import { Props } from './props';

const DateFormField = (props: Props) => {
  const { name = '' } = props;

  const { register, errors, watch, setValue } = useFormContext();
  useEffect(() => register({ name }), [register, name]);

  const { t } = useTranslation();

  const binders = useMemo(() => {
    const error = !!errors[name];

    return {
      value: watch(name),
      ref: register,
      onChange: (_: Event, date: Date | undefined) => setValue(name, date),
      error: error ? capitalize(t(errors[name].message)) : undefined
    };
  }, [name, setValue, register, watch, errors, t]);

  return <DatePicker {...binders} {...props} />;
};

export default DateFormField;
