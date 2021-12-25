import React, { useEffect } from 'react';
import { Text, View } from 'native-base';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import { startCase, upperCase } from 'lodash';
import Button from '@src/components/button';
import FormCard from '@src/components/formCard';
import EmailFormField from '@src/components/formFields/emailFormField';
import PasswordFormField from '@src/components/formFields/passwordFormField';
import TextFormField from '@src/components/formFields/textFormField';
import Icon from '@src/components/icon';
import Layout from '@src/components/layout';
import Link from '@src/components/link';
import useSignUp from '@src/hooks/useSignUp';
import useYupResolver from '@src/hooks/useYupResolver';
import { i18nKey } from '@src/locales/i18n';
import { canGoBack, goBack } from '@src/routes/navigation';
import themeStyles from '@src/themes/styles';
import { Props } from './props';
import styles from './styles';
import { signUpFormSchema, SignUpFormValue } from './validation';

const SignUp = (props: Props) => {
  const { t } = useTranslation();
  const { signUp } = useSignUp();
  const resolver = useYupResolver(signUpFormSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    const initialValue: SignUpFormValue = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: ''
    };
    reset(initialValue);
  }, [reset]);

  const onSubmit = async (values: SignUpFormValue) => {
    await signUp(
      values.email,
      values.firstName,
      values.lastName,
      values.password
    );
  };

  const handleSignIn = () => {
    if (canGoBack()) {
      goBack();
    }
  };

  return (
    <Layout>
      <FormCard title={i18nKey.sign_up}>
        <FormProvider {...methods}>
          <View style={themeStyles.iconField}>
            <Icon name="email" style={themeStyles.fieldIcon} />
            <EmailFormField />
          </View>

          <View style={themeStyles.iconField}>
            <Icon name="person" style={themeStyles.fieldIcon} />
            <TextFormField name="firstName" label={t(i18nKey.first_name)} />
          </View>

          <View style={themeStyles.iconField}>
            <Icon name="person" style={themeStyles.fieldIcon} />
            <TextFormField name="lastName" label={t(i18nKey.last_name)} />
          </View>

          <View style={themeStyles.iconField}>
            <Icon name="lock" style={themeStyles.fieldIcon} />
            <PasswordFormField />
          </View>

          <View style={themeStyles.iconField}>
            <Icon name="lock" style={themeStyles.fieldIcon} />
            <PasswordFormField
              name="confirmPassword"
              label={t(i18nKey.confirm_password)}
            />
          </View>

          <View style={styles.termPolicy}>
            <Text style={styles.message}>
              {t(i18nKey.by_clicking_sign_up_you_agree_to_our)}
            </Text>
            <Text style={styles.message}>
              <Link
                title={startCase(t(i18nKey.term_of_service))}
                style={styles.signInButton}
              />
              <Text>{` ${t(i18nKey.and)} `}</Text>
              <Link
                title={startCase(t(i18nKey.privacy_policy))}
                style={styles.signInButton}
              />
            </Text>
          </View>

          <Button style={styles.signUpButton} onPress={handleSubmit(onSubmit)}>
            <Text>{upperCase(t(i18nKey.sign_up))}</Text>
          </Button>

          <View style={styles.row}>
            <Text>{t(i18nKey.already_have_an_account)}</Text>
            <Link
              title={startCase(t(i18nKey.sign_in))}
              onPress={handleSignIn}
              style={styles.signInButton}
            />
          </View>
        </FormProvider>
      </FormCard>
    </Layout>
  );
};

export default SignUp;
