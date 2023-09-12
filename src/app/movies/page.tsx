import { Search } from "@/Components/Search/Search";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
  description: "Search Movie",
};
export default function Movies() {
  return <Search />;
}
