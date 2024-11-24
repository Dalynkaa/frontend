import { useQueryClient } from '@tanstack/react-query'

export const useRevalidateAllQueries = () => {
	const queryClient = useQueryClient()

	const revalidateAll = () => {
		queryClient.invalidateQueries()
	}

	return revalidateAll
}
