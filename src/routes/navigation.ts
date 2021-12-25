import { createRef } from 'react';
import { NavigationContainerRef } from '@react-navigation/core';

export const navigatorRef = createRef<NavigationContainerRef>();
export const drawerRef = createRef<any>();

export const navigate = (name: string, params?: any) => {
  navigatorRef.current?.navigate(name, params);
};

export const canGoBack = (): boolean => {
  return navigatorRef.current?.canGoBack() || false;
};

export const goBack = () => {
  navigatorRef.current?.goBack();
};

export const reset = (name: string, params?: any) => {
  navigatorRef.current?.reset({
    index: 0,
    routes: [{ name: name, params: params }]
  });
};

export function openDrawer() {
  drawerRef?.current?._root?.open();
}

export function closeDrawer() {
  drawerRef?.current?._root?.close();
}
