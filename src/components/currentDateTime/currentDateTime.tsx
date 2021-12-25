import React, { useEffect, useState } from 'react';
import { Text, View } from 'native-base';
import { useTranslation } from 'react-i18next';
import { Props } from './props';
import styles from './styles';

const CurrentDateTime = (props: Props) => {
  const { t } = useTranslation();

  const [dateTime, setDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    let timer = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <Text>{dateTime}</Text>;
};

export default CurrentDateTime;
