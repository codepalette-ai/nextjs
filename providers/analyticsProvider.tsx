import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { env } from "@/env";
import { PostHogProvider } from "@/providers/posthogProvider";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

type AnalyticsProviderProps = {
  readonly children: ReactNode;
};

const { NEXT_PUBLIC_GA_MEASUREMENT_ID } = env();

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => (
  <PostHogProvider>
    {children}
    <VercelAnalytics />
    {NEXT_PUBLIC_GA_MEASUREMENT_ID && (
      <GoogleAnalytics gaId={NEXT_PUBLIC_GA_MEASUREMENT_ID} />
    )}
  </PostHogProvider>
);
