import React from 'react';
import { Button, Text, View } from 'native-base';
import { useTranslation } from 'react-i18next';
import { startCase } from 'lodash';
import Icon from '@src/components/icon';
import { canGoBack, goBack } from '@src/routes/navigation';
import { Props } from './props';
import styles from './styles';

const FormCard = (props: Props) => {
  const { children, title, back } = props;
  const { t } = useTranslation();

  const handleBack = () => {
    if (canGoBack()) {
      goBack();
    }
  };

  return (
    <View style={styles.card}>
      {back && (
        <Button transparent onPress={handleBack}>
          <Icon style={styles.backButton} name="arrow-back" />
        </Button>
      )}
      {title && <Text style={styles.title}>{startCase(t(title))}</Text>}
      {children}
    </View>
  );
};

export default FormCard;
