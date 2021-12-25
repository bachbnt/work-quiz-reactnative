import React, { useEffect } from 'react';
import { Text, View } from 'native-base';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import { upperCase } from 'lodash';
import Button from '@src/components/button';
import FormCard from '@src/components/formCard';
import EmailFormField from '@src/components/formFields/emailFormField';
import Icon from '@src/components/icon';
import Layout from '@src/components/layout';
import { i18nKey } from '@src/locales/i18n';
import useForgotPassword from '@src/hooks/useForgotPassword';
import useYupResolver from '@src/hooks/useYupResolver';
import themeStyles from '@src/themes/styles';
import { Props } from './props';
import styles from './styles';
import {
  forgotPasswordFormSchema,
  ForgotPasswordFormValue
} from './validation';

const ForgotPassword = (props: Props) => {
  const { t } = useTranslation();
  const { forgotPassword } = useForgotPassword();
  const resolver = useYupResolver(forgotPasswordFormSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    const initialValue: ForgotPasswordFormValue = {
      email: ''
    };
    reset(initialValue);
  }, [reset]);

  const onSubmit = async (values: ForgotPasswordFormValue) => {
    await forgotPassword(values.email);
  };

  return (
    <Layout>
      <FormCard title={i18nKey.forgot_password}>
        <FormProvider {...methods}>
          <View style={themeStyles.iconField}>
            <Icon name="email" style={themeStyles.fieldIcon} />
            <EmailFormField />
          </View>

          <Button
            style={styles.forgotPasswordButton}
            onPress={handleSubmit(onSubmit)}>
            <Text>{upperCase(t(i18nKey.reset_password))}</Text>
          </Button>
        </FormProvider>
      </FormCard>
    </Layout>
  );
};

export default ForgotPassword;
