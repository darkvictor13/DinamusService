import Footer from "@/components/footer";
import createCache from "@emotion/cache";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./theme";
import DinamusCacheProvider from "./providers/dinamusCacheProvider";
import Header from "@/components/header";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <DinamusCacheProvider>
          <ThemeProvider theme={theme}>
            <Box display="flex" flexDirection="column" gap={1}>
              <Header />
              {children}
              <Footer />
            </Box>
          </ThemeProvider>
        </DinamusCacheProvider>
      </body>
    </html>
  );
}
