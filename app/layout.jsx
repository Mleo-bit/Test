import "./globals.css";
import MainLayout from "@/components/MainLayout";

export const metadata = {
  title: "Open Source Ethereum Wallet",
  description: "Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
