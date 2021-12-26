import React, { useMemo } from 'react';
import {
  Button,
  Header as NativeHeader,
  Input,
  Item,
  Left,
  Right,
  Title
} from 'native-base';
import { useTranslation } from 'react-i18next';
import Icon from '@src/components/icon';
import { canGoBack, goBack, openDrawer } from '@src/routes/navigation';
import themeStyles from '@src/themes/styles';
import { Props } from './props';
import styles from './styles';

const Header = (props: Props) => {
  const {
    leftPress,
    rightPress,
    leftIcon,
    leftIconStyle,
    rightIcon,
    rightIconStyle,
    renderRight,
    title,
    disableBack,
    searchBar,
    onSearch,
    style,
    menu
  } = props;

  const { icon, onPressHandler } =
    useMemo(() => {
      if (disableBack) {
        return {};
      }

      if (menu) {
        return {
          icon: 'menu',
          onPressHandler: openDrawer
        };
      }

      if (leftPress) {
        return {
          icon: leftIcon,
          onPressHandler: leftPress
        };
      }

      return {
        icon: 'arrow-back',
        onPressHandler: () => canGoBack() && goBack()
      };
    }, [menu, leftPress, disableBack, leftIcon]) || {};
  const { t } = useTranslation();

  return (
    <NativeHeader
      style={[styles.container, style]}
      searchBar={searchBar}
      rounded={searchBar}>
      <Left style={searchBar ? styles.leftHasSearch : styles.left}>
        {icon && (
          <Button
            transparent
            onPress={onPressHandler}
            style={styles.leftButton}>
            <Icon name={icon} style={[themeStyles.icon, leftIconStyle]} />
          </Button>
        )}
      </Left>
      {searchBar && (
        <Item>
          <Icon name="ios-search" style={styles.icon} />
          <Input placeholder="Search" onChangeText={onSearch} />
        </Item>
      )}

      {title && <Title style={styles.title}>{t(title)}</Title>}

      <Right style={searchBar ? styles.rightHasSearch : styles.right}>
        {rightIcon && rightPress ? (
          <Button transparent onPress={rightPress} style={styles.rightButton}>
            {rightIcon.length > 1 ? (
              <Icon name={rightIcon} style={[styles.icon, rightIconStyle]} />
            ) : (
              <Icon name={rightIcon} style={[styles.icon, rightIconStyle]} />
            )}
          </Button>
        ) : null}

        {renderRight && renderRight()}
      </Right>
    </NativeHeader>
  );
};

export default Header;
