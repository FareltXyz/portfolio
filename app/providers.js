import { ThemeProvider } from "next-themes";
export default function Providers({ children }) {
    return (
        <ThemeProvider defaultTheme="dark" enableSystem={false} attribute={"data-theme"}>
            {children}
        </ThemeProvider>
    )
}