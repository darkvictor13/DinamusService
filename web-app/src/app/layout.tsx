import Footer from "@/components/footer";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./theme";
import DinamusCacheProvider from "../providers/dinamusCacheProvider";
import Header from "@/components/header";
import IsClientProvider from "@/providers/isClientProvider";
import MinistrySelectionProvider from "@/providers/ministrySelectionProvider";

export const metadata = {
  title: "Dinamus service",
  description: "Dinamus service",
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
          <IsClientProvider>
            <MinistrySelectionProvider>
              <ThemeProvider theme={theme}>
                <Box display="flex" flexDirection="column" gap={1}>
                  <Header />
                  {children}
                  <Footer />
                </Box>
              </ThemeProvider>
            </MinistrySelectionProvider>
          </IsClientProvider>
        </DinamusCacheProvider>
      </body>
    </html>
  );
}
