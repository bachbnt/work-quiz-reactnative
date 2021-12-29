import AsyncStorage from '@react-native-async-storage/async-storage';
import { Key } from '@src/constants/key';
import { SignInRequest, SignInResponse } from '@src/models/reqres/signIn';
import { SignUpRequest, SignUpResponse } from '@src/models/reqres/signUp';
import { SignOutRequest, SignOutResponse } from '@src/models/reqres/signOut';
import {
  ForgotPasswordRequest,
  ForgotPasswordResponse
} from '@src/models/reqres/forgotPassword';
import { apiClient } from './apiClient';
import { Endpoint } from '@src/configs/endpoint';

class AuthService {
  async signIn(request: SignInRequest): Promise<SignInResponse> {
    const result = await apiClient.post(Endpoint.SIGN_IN, request);
    const response: SignInResponse = result.data;
    await AsyncStorage.setItem(Key.ACCESS_TOKEN, response.data.token);
    return response;
  }

  async signUp(request: SignUpRequest): Promise<SignUpResponse> {
    const result = await apiClient.post(Endpoint.SIGN_UP, request);
    const response: SignUpResponse = result.data;
    await AsyncStorage.setItem(Key.ACCESS_TOKEN, response.data.token);
    return response;
  }
  async signOut(request: SignOutRequest): Promise<SignOutResponse> {
    await AsyncStorage.clear();
    return { status: 200 };
  }

  async isSignedIn(): Promise<boolean> {
    const token = await AsyncStorage.getItem(Key.ACCESS_TOKEN);
    return !!token;
  }

  async forgotPassword(
    request: ForgotPasswordRequest
  ): Promise<ForgotPasswordResponse> {
    return { status: 200 };
  }
}

export const authService = new AuthService();
