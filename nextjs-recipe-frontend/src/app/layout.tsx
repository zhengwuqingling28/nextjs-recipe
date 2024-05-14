import { ReactNode } from "react";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
};

export const metadata = {
  title: "Next Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default RootLayout;
