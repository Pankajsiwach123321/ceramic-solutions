import { Metadata } from "next";
import { CommonButton } from "./components/common/CommonButton";
import { CallIcon } from "./components/common/Icons";
import { Button } from "./components/common/Button";

export const metadata: Metadata = {
  title: "Pixel Perfect Webdesign | Web Design Knoxville TN",
  description:
    "Custom web design for businesses in Knoxville, TN & nationwide. Specializing in roofing, tiling, urgent cares, dental clinics & more.",
  keywords: [
    "Nationwide web design services",
    "Roofing web design",
    "Tiling website design",
    "Urgent Care web design",
    "Dental website development",
    "Best web design company in Knoxville, TN",
  ],
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "Unleash Your Digital Potential Today",
    siteName: "Pixel Perfect Webdesign & Security",
    description:
      "Custom web design for businesses in Knoxville, TN & nationwide. Specializing in roofing, tiling, urgent cares, dental clinics & more.",
    url: "https://www.pixelperfectds.com",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <CommonButton href='/contact' className='flex gap-2'>
        Book a Call <CallIcon svgClassName='h-6 w-6' />
      </CommonButton>

      <Button className='flex items-center justify-center gap-2'>
        Login <CallIcon svgClassName='h-6 w-6' />
      </Button>
    </main>
  );
}
