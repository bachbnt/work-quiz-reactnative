import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Key } from '@src/constants/key';
import { SignInRequest, SignInResponse } from '@src/models/reqres/signIn';
import { SignUpRequest, SignUpResponse } from '@src/models/reqres/signUp';
import { SignOutRequest, SignOutResponse } from '@src/models/reqres/signOut';
import {
  ForgotPasswordRequest,
  ForgotPasswordResponse,
} from '@src/models/reqres/forgotPassword';

class AuthService {
  async signIn(request: SignInRequest): Promise<SignInResponse> {
    await AsyncStorage.setItem(Key.ACCESS_TOKEN, 'test');
    return {
      data: { accessToken: '', refreshToken: '' },
      message: '',
    };
  }
  async signUp(request: SignUpRequest): Promise<SignUpResponse> {
    return {
      data: { accessToken: '', refreshToken: '' },
    };
  }
  async signOut(request: SignOutRequest): Promise<SignOutResponse> {
    await AsyncStorage.clear();
    return {};
  }

  async isSignedIn(): Promise<boolean> {
    const accessToken = await AsyncStorage.getItem(Key.ACCESS_TOKEN);
    return !!accessToken;
  }

  async forgotPassword(
    request: ForgotPasswordRequest,
  ): Promise<ForgotPasswordResponse> {
    return {};
  }
}

export const authService = new AuthService();
