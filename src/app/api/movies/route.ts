import { NextResponse } from "next/server";
import Fetcher from "../FetchData";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("search");
  if (!query) return null;
  const FetchData = new Fetcher();
  const data = await FetchData.getSearch(query);

  return NextResponse.json(data);
}
