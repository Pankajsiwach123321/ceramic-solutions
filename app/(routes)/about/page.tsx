import CarryingTrust from "@/app/components/about/CarryingTrust";
import ChooseUs from "@/app/components/about/ChooseUs";
import OurProcess from "@/app/components/about/OurProcess";
import OurTeam from "@/app/components/about/OurTeam";
import GetInTouch from "@/app/components/common/GetInTouch";

export default function Home() {
  return (
    <>
      <OurTeam/>
      <CarryingTrust />
      <ChooseUs />
      <OurProcess />
      {/* <GetInTouch/> */}
    </>
  );
}
