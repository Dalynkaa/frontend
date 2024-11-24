import { axiosClassic } from '@/api/interceptors'
import { IAuthResponse } from '@/types/auth.types'
import { removeFromStorage, saveTokenStorage } from './auth-token.service'

export const authService = {
	async getNewTokens() {
		try {
			const response =
				await axiosClassic.post<IAuthResponse>('/auth/access-token')
			if (response.data.accessToken) {
				saveTokenStorage(response.data.accessToken)
			}
			return response
		} catch (error) {
			console.error('Error getting new tokens:', error)
			removeFromStorage()
			throw new Error('Failed to refresh tokens')
		}
	},

	async logout() {
		try {
			const response = await axiosClassic.post<boolean>('/auth/logout')

			if (response.data) {
				removeFromStorage()
			}
			return response
		} catch (error) {
			console.error('Logout error:', error)
			throw new Error('Failed to log out')
		}
	},
	async getNewTokensByRefresh(refreshToken: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			'/auth/access-token',
			{},
			{
				headers: {
					Cookie: `refreshToken=${refreshToken}`,
				},
			}
		)
		return response.data
	},
}
