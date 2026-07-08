import type { Metadata } from "next";
import Experience from "@/components/sections/Experience";
import EduCerts from "@/components/sections/EduCerts";
import Leadership from "@/components/sections/Leadership";
import Extras from "@/components/sections/Extras";

export const metadata: Metadata = { title: "Work · Milen Popat" };

export default function WorkPage() {
  return (
    <>
      <Experience />
      <EduCerts />
      <Leadership />
      <Extras />
    </>
  );
}
