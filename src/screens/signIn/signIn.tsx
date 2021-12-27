import React, { useEffect } from 'react';
import { Text, View } from 'native-base';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import { startCase, upperCase } from 'lodash';
import Button from '@src/components/button';
import FormCard from '@src/components/formCard';
import EmailFormField from '@src/components/formFields/emailFormField';
import PasswordFormField from '@src/components/formFields/passwordFormField';
import Icon from '@src/components/icon';
import Layout from '@src/components/layout';
import Link from '@src/components/link';
import Logo from '@src/components/logo';
import useSignIn from '@src/hooks/useSignIn';
import useYupResolver from '@src/hooks/useYupResolver';
import { i18nKey } from '@src/locales/i18n';
import { navigate } from '@src/routes/navigation';
import { RouteName } from '@src/routes/routeName';
import themeStyles from '@src/themes/styles';
import { Props } from './props';
import styles from './styles';
import { signInFormSchema, SignInFormValue } from './validation';

const SignIn = (props: Props) => {
  const { t } = useTranslation();
  const { signIn } = useSignIn();
  const resolver = useYupResolver(signInFormSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    const initialValue: SignInFormValue = {
      email: 'truongdaitin98@gmail.com',
      password: '123456@Aa'
    };
    reset(initialValue);
  }, [reset]);

  const onSubmit = async (values: SignInFormValue) => {
    await signIn(values.email, values.password);
  };

  const handleForgotPassword = () => {
    navigate(RouteName.FORGOT_PASSWORD);
  };

  const handleSignUp = () => {
    navigate(RouteName.SIGN_UP);
  };

  return (
    <Layout>
      <FormCard>
        <FormProvider {...methods}>
          <Logo style={styles.logo} />

          <View style={themeStyles.iconField}>
            <Icon name="email" style={themeStyles.fieldIcon} />
            <EmailFormField />
          </View>

          <View style={themeStyles.iconField}>
            <Icon name="lock" style={themeStyles.fieldIcon} />
            <PasswordFormField />
          </View>

          <Link
            title={`${startCase(t(i18nKey.forgot_password))}?`}
            onPress={handleForgotPassword}
            style={styles.forgotPasswordButton}
          />

          <Button style={styles.signInButton} onPress={handleSubmit(onSubmit)}>
            <Text>{upperCase(t(i18nKey.sign_in))}</Text>
          </Button>

          <View style={styles.row}>
            <Text>{t(i18nKey.dont_have_an_account)}</Text>
            <Link
              title={startCase(t(i18nKey.sign_up))}
              onPress={handleSignUp}
              style={styles.signUpButton}
            />
          </View>
        </FormProvider>
      </FormCard>
    </Layout>
  );
};

export default SignIn;
