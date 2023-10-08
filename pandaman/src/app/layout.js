import './globals.css'
import { Kanit } from 'next/font/google'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const kanit = Kanit({ 
  weight: '300',
  subsets: ['latin'] })

export const metadata = {
  title: 'pandaman',
  description: 'Cafeteria app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  )
}

