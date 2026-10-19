import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import 'antifraud-portal-components-react/styles.css'
import './globals.css'
export const metadata: Metadata = {title: 'Antifraud Personal', description: 'Subject-controlled requests and disclosures.'}
export default function RootLayout({children}: Readonly<{children: ReactNode}>) { return <html lang="en"><body>{children}</body></html> }
