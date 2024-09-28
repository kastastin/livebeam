import Footer from "@/components/sections/Footer";
import { FormProvider } from "@/contexts/FormContext";

import "./globals.css";

export const metadata = {
  title: "Livebeam",
  description: "Test project",
  icons: {
    icon: "/assets/logo.svg",
  },
};

const RootLayout = ({ children }) => (
  <html lang="en">
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
