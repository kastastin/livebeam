import Footer from "@/components/sections/Footer";

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
      <>
        {children}
        <Footer />
      </>
    </body>
  </html>
);

export default RootLayout;
