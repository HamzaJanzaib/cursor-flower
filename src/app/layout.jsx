import StickyCursor from "@/Components/StickyCursor";
import "./globals.css";
import Header from "@/Components/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Header />
        <StickyCursor />

        {children}
      </body>
    </html>
  );
}
