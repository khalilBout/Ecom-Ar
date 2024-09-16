// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "slick-carousel/slick/slick.css";

// import "./globals.css";
// import "slick-carousel/slick/slick.css";
// import AuthProvider from "@/Utils/AuthProvider/AuthProvider";
// import Navbar from "@/app/components/Navbar/Navbar";
// // import Footer from "@/app/components/Footer/Footer";
// import { Toaster } from "react-hot-toast";
// // import Script from "next/script";

// // const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Bravo",
//   description: "منصة تعليمية للاطفال في الكويت",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html>
//       <body className="">
//         <AuthProvider>
//           <Navbar />
//           {children}
//           <Toaster position="bottom-right" />
//           {/* <Footer /> */}
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
