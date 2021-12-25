import React, { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { capitalize } from 'lodash';
import TextField from '@src/components/textField';
import { Props } from './props';

const TextFormField = (props: Props) => {
  const { name = '' } = props;
  const { register, errors, watch, setValue } = useFormContext();

  useEffect(() => register({ name }), [register, name]);

  const { t } = useTranslation();

  const binders = useMemo(() => {
    const error = !!errors[name];

    return {
      value: watch(name) || '',
      ref: register,
      onChangeText: (value: string) => setValue(name, value),
      error: error ? capitalize(t(errors[name].message)) : undefined
    };
  }, [name, register, watch, errors, t, setValue]);

  return <TextField {...binders} {...props} />;
};

export default TextFormField;
