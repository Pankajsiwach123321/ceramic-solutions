// import { Metadata } from "next";
// import { CommonButton } from "./components/common/CommonButton";
// import { CallIcon } from "./components/common/Icons";
// import { Button } from "./components/common/Button";

// export const metadata: Metadata = {
//   title: "Pixel Perfect Webdesign | Web Design Knoxville TN",
//   description:
//     "Custom web design for businesses in Knoxville, TN & nationwide. Specializing in roofing, tiling, urgent cares, dental clinics & more.",
//   keywords: [
//     "Nationwide web design services",
//     "Roofing web design",
//     "Tiling website design",
//     "Urgent Care web design",
//     "Dental website development",
//     "Best web design company in Knoxville, TN",
//   ],
//   twitter: {
//     card: "summary_large_image",
//   },
//   openGraph: {
//     title: "Unleash Your Digital Potential Today",
//     siteName: "Pixel Perfect Webdesign & Security",
//     description:
//       "Custom web design for businesses in Knoxville, TN & nationwide. Specializing in roofing, tiling, urgent cares, dental clinics & more.",
//     url: "https://www.pixelperfectds.com",
//     type: "website",
//     locale: "en_US",
//   },
//   alternates: {
//     canonical: "/",
//   },
// };

// export default function Home() {
//   return (
//     <main className='flex min-h-screen flex-col items-center justify-between p-24'>
//       <CommonButton href='/contact' className='flex gap-2'>
//         Book a Call <CallIcon svgClassName='h-6 w-6' />
//       </CommonButton>

//       <Button className='flex items-center justify-center gap-2'>
//         Login <CallIcon svgClassName='h-6 w-6' />
//       </Button>
//     </main>
//   );
// }

import GetInTouch from "@/app/components/common/GetInTouch";
import ServiceAreas from "@/app/components/common/ServiceAreas";
import Faqs from "@/app/components/homepage/Faqs";
import HowItWorks from "@/app/components/homepage/HowItWorks";
import OurBlogs from "@/app/components/homepage/OurBlogs";
import OurCustomers from "@/app/components/homepage/OurCustomers";
import WhatWeDo from "@/app/components/homepage/WhatWeDo";
import WhyChooseUs from "@/app/components/homepage/WhyChooseUs";

export default function Home() {
  return (
    <>
      <WhatWeDo />
      <WhyChooseUs />
      <OurCustomers />
      <HowItWorks />
      <GetInTouch />
      <OurBlogs />
      <Faqs />
      <ServiceAreas />
    </>
  );
}
