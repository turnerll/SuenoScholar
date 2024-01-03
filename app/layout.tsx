import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SueñoScholar: The AI-Powered Mock Interview & Academic Prep Platform Empowering Latino/Latina Future Physicians",
  openGraph: {
    title: "SueñoScholar: The AI-Powered Mock Interview & Academic Prep Platform Empowering Latino/Latina Future Physicians",
    description:
      "SueñoScholar is an AI-powered mock interview platform that helps you practice for your medical school interview.",
    images: [
      {
        url: "https://www.canva.com/design/DAFt02gtm84/5pOQUvbEkpf7GL1W_qtrbQ/view?utm_content=DAFt02gtm84&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ""SueñoScholar: The AI-Powered Mock Interview & Academic Prep Platform Empowering Latino/Latina Future Physicians"",
    description:
      "SueñoScholar is an AI-powered mock interview platform that helps you practice for your medical school interview",
    images: ["https://www.canva.com/design/DAFt02gtm84/5pOQUvbEkpf7GL1W_qtrbQ/view?utm_content=DAFt02gtm84&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"],
    creator: "@tmeyer_me",
  },
  metadataBase: new URL("https://liftoff-nine.vercel.app/"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
