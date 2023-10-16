import Overview from "@/components/Dashboard/Overview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blue Analytics",
  description: "Clean up event data collection and analysis.",
};

export default function Home() {
  return (
    <>
      <Overview />
    </>
  );
}
