import { Toast as NativeToast } from 'native-base';

class Toast {
  success(content: string) {
    NativeToast.show({
      text: content,
      duration: 3000,
      position: 'bottom',
      style: { bottom: '50%' },
      type: 'success',
      textStyle: {
        textAlign: 'center'
      }
    });
  }
  warn(content: string) {
    NativeToast.show({
      text: content,
      duration: 3000,
      position: 'bottom',
      style: { bottom: '50%' },
      type: 'warning',
      textStyle: {
        textAlign: 'center'
      }
    });
  }
  error(content: string) {
    NativeToast.show({
      text: content,
      duration: 3000,
      position: 'bottom',
      style: { bottom: '50%' },
      type: 'danger',
      textStyle: {
        textAlign: 'center'
      }
    });
  }
  info(content: string) {
    NativeToast.show({
      text: content,
      duration: 3000,
      position: 'bottom',
      style: { bottom: '50%' },
      textStyle: {
        textAlign: 'center'
      }
    });
  }
}

export const toast = new Toast();
