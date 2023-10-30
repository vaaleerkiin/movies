import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import Fetcher from "../FetchData";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("search");
  if (!query) return null;
  const FetchData = new Fetcher();
  const data = await FetchData.getSearch(query);

  const path = req.nextUrl.searchParams.get("path") || "/";

  revalidatePath(path);

  return NextResponse.json(data);
}
