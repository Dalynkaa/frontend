import { IUser } from './user.types'

export interface IAuthForm {
	code: string
}
export interface ITokenInside {
	id: string
	email: string
	name: string
	role: string
}

export interface IAuthResponse {
	accessToken: string
	user: IUser
}
