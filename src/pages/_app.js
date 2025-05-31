import "@/styles/globals.css";
import 'flowbite';
import { ThemeProvider } from 'next-themes'


export default function App({ Component, pageProps }) {
    return (
      <ThemeProvider attribute={"class"} defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
