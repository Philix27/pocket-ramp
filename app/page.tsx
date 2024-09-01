"use client";

import "@rainbow-me/rainbowkit/styles.css";
import "./styles/index.css";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet } from "@wagmi/core/chains";
import { http } from "@wagmi/core";
import { WagmiProvider } from "wagmi";
// import { App } from "@xmtp/react-app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { App } from ".";

const config = getDefaultConfig({
  appName: "XMTP Next.js Example",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  ssr: true,
});

const queryClient = new QueryClient();

export default function Home() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
