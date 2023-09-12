import { NextResponse } from "next/server";
import Fetcher from "../FetchData";

export async function GET(req: Request) {
  const FetchData = new Fetcher();
  const data = await FetchData.getPopular();

  return NextResponse.json(data);
}
