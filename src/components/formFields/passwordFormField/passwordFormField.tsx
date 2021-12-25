import React from 'react';
import { useTranslation } from 'react-i18next';
import TextFormField from '@src/components/formFields/textFormField';
import { i18nKey } from '@src/locales/i18n';
import { Props } from './props';

const PasswordFormField = (props: Props) => {
  const { name = 'password', ...others } = props;

  const { t } = useTranslation();

  return (
    <TextFormField
      name={name}
      label={t(i18nKey.password)}
      password
      {...others}
    />
  );
};

export default PasswordFormField;
