import React, { useEffect } from 'react';
import { Text } from 'native-base';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import { upperCase } from 'lodash';
import Button from '@src/components/button';
import FormCard from '@src/components/formCard';
import PasswordFormField from '@src/components/formFields/passwordFormField';
import useChangePassword from '@src/hooks/useChangePassword';
import useYupResolver from '@src/hooks/useYupResolver';
import { i18nKey } from '@src/locales/i18n';
import { Props } from './props';
import styles from './styles';
import { passwordFormFormSchema, PasswordFormFormValue } from './validation';

const PasswordForm = (props: Props) => {
  const { t } = useTranslation();
  const { changePassword } = useChangePassword();
  const resolver = useYupResolver(passwordFormFormSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    const initialValue: PasswordFormFormValue = {
      currentPassword: '',
      password: '',
      confirmPassword: ''
    };
    reset(initialValue);
  }, [reset]);

  const onSubmit = async (values: PasswordFormFormValue) => {
    await changePassword(values.currentPassword, values.password);
  };

  return (
    <FormCard title={i18nKey.password}>
      <FormProvider {...methods}>
        <PasswordFormField
          name="currentPassword"
          label={t(i18nKey.current_password)}
        />

        <PasswordFormField />

        <PasswordFormField
          name="confirmPassword"
          label={t(i18nKey.confirm_password)}
        />

        <Button style={styles.saveButton} onPress={handleSubmit(onSubmit)}>
          <Text>{upperCase(t(i18nKey.save))}</Text>
        </Button>
      </FormProvider>
    </FormCard>
  );
};

export default PasswordForm;
