import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import Fetcher from "../../FetchData";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const FetchData = new Fetcher();
  const data = await FetchData.getDetails(id);

  const path = req.nextUrl.searchParams.get("path") || "/";

  revalidatePath(path);

  return NextResponse.json(data);
}
