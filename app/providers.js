import { ThemeProvider } from "next-themes";
export default function Providers({ children }) {
    return (
        <ThemeProvider defaultTheme="dark" enableSystem={true} attribute={"class"} >
            {children}
        </ThemeProvider>
    )
}