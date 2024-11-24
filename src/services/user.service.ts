import { axiosClassic, axiosWithAuth } from '@/api/interceptors'
import { IUser } from '@/types/user.types'

export interface IProfileResponse extends IUser {}

class UserService {
	private BASE_URL = '/users'

	async getProfile() {
		const response = await axiosWithAuth.get<IProfileResponse>(
			this.BASE_URL + '/me'
		)
		return response.data
	}
	async getServerProfile(accessToken: string) {
		const response = await axiosClassic.get<IProfileResponse>(
			this.BASE_URL + '/me',
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)
		return response.data
	}

	async getById(id: string) {
		const response = await axiosWithAuth.get<IUser>(this.BASE_URL + '/' + id)
		return response.data
	}
}

export const userService = new UserService()
