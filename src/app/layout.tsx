import { SITE_NAME } from '@/constants/seo.constants'
import clsx from 'clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Toaster } from 'sonner'
import './globals.css'
import { Providers } from './providers'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: '',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={clsx(geistSans.className)}>
				<Providers>
					<div className='min-h-full min-w-full'>{children}</div>
					<Toaster
						theme='dark'
						position='bottom-right'
						pauseWhenPageIsHidden
						duration={5000}
						expand
						toastOptions={{
							unstyled: true,
							classNames: {
								toast:
									'bg-background-2 px-4 py-2 flex gap-4 justify-start items-center rounded-2xl min-w-[300px]',
								title: 'text-red',
								description: 'text-gre',
								actionButton: 'bg-zinc',
								cancelButton: 'bg-orange',
								closeButton: 'bg-green',
								error: 'bg-red/50 border-red border border-2',
								info: 'bg-core-1/50 border-core-1 border border-2',
								success: 'bg-green/50 border-green border border-2',
								warning: 'bg-orange/50 border-orange border border-2',
							},
						}}
						// icons={{
						// 	error: <Ban />,
						// 	info: <InfoIcon />,
						// 	success: <Check />,
						// 	warning: <CircleAlert />,
						// }}
					/>
				</Providers>
			</body>
		</html>
	)
}
