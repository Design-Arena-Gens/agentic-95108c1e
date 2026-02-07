import './globals.css'

export const metadata = {
  title: 'TechGear - Premium Gadgets Store',
  description: 'Shop the latest tech gadgets and accessories',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
