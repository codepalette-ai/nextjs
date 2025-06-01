import { AnalyticsProvider } from "@/providers/analyticsProvider";
import { AuthProvider } from "@/providers/authProvider";
import { ThemeProvider } from "@/providers/themeProvider";
import { Header } from "@/components/header";

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>
    <AuthProvider>
      <AnalyticsProvider>
        <main className="container mx-auto">
          <Header />
          {children}
        </main>
      </AnalyticsProvider>
    </AuthProvider>
  </ThemeProvider>
);
