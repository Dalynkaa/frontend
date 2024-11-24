import { ITokenInside } from '@/types/auth.types'

export type TUserDataState = {
	id: string
	email?: string
	name: string
	role: string
	isLoggedIn: boolean
}

export const transformUserToState = (
	user: ITokenInside
): TUserDataState | null => {
	return {
		id: user.id,
		email: user.email,
		role: user.role,
		name: user.name,
		isLoggedIn: true,
	}
}
