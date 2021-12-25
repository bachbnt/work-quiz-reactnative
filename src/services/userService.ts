import {
  ChangePasswordRequest,
  ChangePasswordResponse
} from '@src/models/reqres/changePassword';
import {
  GetProfileRequest,
  GetProfileResponse
} from '@src/models/reqres/getProfile';
import {
  UpdateProfileRequest,
  UpdateProfileResponse
} from '@src/models/reqres/updateProfile';

class UserService {
  async getProfile(request: GetProfileRequest): Promise<GetProfileResponse> {
    return {
      data: {
        id: '',
        firstName: 'Bach',
        lastName: 'Bui',
        email: 'bachbnt@gmail.com',
        avatar:
          'https://raw.githubusercontent.com/bachbnt/assets/main/avatar.jpeg'
      }
    };
  }

  async updateProfile(
    request: UpdateProfileRequest
  ): Promise<UpdateProfileResponse> {
    return {
      data: {
        id: '',
        firstName: 'Bach',
        lastName: 'Bui',
        email: 'bachbnt@gmail.com'
      }
    };
  }

  async changePassword(
    request: ChangePasswordRequest
  ): Promise<ChangePasswordResponse> {
    return {};
  }
}

export const userService = new UserService();
