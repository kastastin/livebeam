import localFont from "next/font/local";

import Footer from "@/components/sections/Footer";
import { FormProvider } from "@/contexts/FormContext";

import "./globals.css";

const trebuchet = localFont({
  src: [
    {
      path: "./fonts/TrebuchetMS.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TrebuchetMS-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Livebeam",
  description: "Test project",
  icons: {
    icon: "/assets/logo.svg",
  },
};

const RootLayout = ({ children }) => (
  <html lang="en" className={trebuchet.className}>
    <body className="bg-bg font-trebuchet text-black">
      <FormProvider>
        <main>
          {children}
          <Footer />
        </main>
      </FormProvider>
    </body>
  </html>
);

export default RootLayout;
