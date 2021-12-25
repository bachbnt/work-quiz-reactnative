import React from 'react';
import { useTranslation } from 'react-i18next';
import TextFormField from '@src/components/formFields/textFormField';
import { i18nKey } from '@src/locales/i18n';
import { Props } from './props';

const EmailFormField = (props: Props) => {
  const { name = 'email', ...others } = props;

  const { t } = useTranslation();

  return (
    <TextFormField
      name={name}
      label={t(i18nKey.email_address)}
      keyboardType="email-address"
      {...others}
    />
  );
};

export default EmailFormField;
