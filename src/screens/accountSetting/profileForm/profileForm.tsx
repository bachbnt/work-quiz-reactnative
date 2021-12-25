import React, { useEffect } from 'react';
import { Text } from 'native-base';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import { upperCase } from 'lodash';
import Button from '@src/components/button';
import FormCard from '@src/components/formCard';
import DateFormField from '@src/components/formFields/dateFormField';
import TextFormField from '@src/components/formFields/textFormField';
import TextField from '@src/components/textField';
import useUpdateProfile from '@src/hooks/useUpdateProfile';
import useYupResolver from '@src/hooks/useYupResolver';
import { i18nKey } from '@src/locales/i18n';
import { RootState } from '@src/redux/rootState';
import { UserState } from '@src/redux/user/userState';
import { Props } from './props';
import styles from './styles';
import { profileFormFormSchema, ProfileFormFormValue } from './validation';
import AvatarPicker from '@src/components/avatarPicker';

const ProfileForm = (props: Props) => {
  const { t } = useTranslation();
  const { updateProfile } = useUpdateProfile();
  const resolver = useYupResolver(profileFormFormSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, reset } = methods;
  const userReducer = useSelector<RootState, UserState>(
    (state) => state.userReducer
  );

  useEffect(() => {
    if (userReducer) {
      const { firstName, lastName, dateOfBirth } = userReducer;
      const initialValue: ProfileFormFormValue = {
        firstName,
        lastName,
        dateOfBirth: dateOfBirth?.toISOString() || ''
      };
      reset(initialValue);
    }
  }, [reset, userReducer]);

  const onSubmit = async (values: ProfileFormFormValue) => {
    await updateProfile(values.firstName, values.lastName, values.dateOfBirth);
  };

  return (
    <FormCard title={i18nKey.profile}>
      <FormProvider {...methods}>
        <AvatarPicker image={userReducer?.avatar} style={styles.avatar} />

        <TextField
          label={t(i18nKey.email_address)}
          value={userReducer?.email || ''}
          disabled
        />

        <TextFormField name="firstName" label={t(i18nKey.first_name)} />

        <TextFormField name="lastName" label={t(i18nKey.last_name)} />

        <DateFormField name="dateOfBirth" label={t(i18nKey.date_of_birth)} />

        <Button style={styles.saveButton} onPress={handleSubmit(onSubmit)}>
          <Text>{upperCase(t(i18nKey.save))}</Text>
        </Button>
      </FormProvider>
    </FormCard>
  );
};

export default ProfileForm;
