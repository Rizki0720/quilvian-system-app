import "./globals.css";
import { ProviderLayout } from "@/components/ui/provider";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import SidebarWrapper from "@/components/features/Sidebar/sidebarWrapper";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Quilvian System App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ErrorBoundary>
          <ProviderLayout>
            <div style={{ display: "flex", height: "100vh", width: "100vw", backgroundColor: "white" }}>
              {/* Sidebar Component */}
              <SidebarWrapper />

              {/* Main Content */}
              <main style={{ flex: 1, overflow: "auto" }}>
                {children}
              </main>
            </div>
          </ProviderLayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}
