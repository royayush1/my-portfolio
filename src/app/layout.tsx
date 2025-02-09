import './globals.css';
import Navbar from './components/Navbar';
import BackgroundMusic from './components/BackgroundMusic';

export const metadata = {
  title: "My Portfolio",
  description: "A personal portfolio showcasing my projects and skills."
}

export default function RootLayout({children} : {children: React.ReactNode}) {
  return(
    <html lang='en' >
      <head>
        <meta name='viewport' content="width=device-width, initial-scale=1"/>
      </head>
      <body className='bg-gradient-to-r from-orange-500 to-pink-400'>
        <Navbar/>
        <BackgroundMusic/>
        <main>{children}</main>
      </body>
    </html>
  );
}
