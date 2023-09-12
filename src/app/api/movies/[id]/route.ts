import { NextResponse } from "next/server";
import Fetcher from "../../FetchData";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const FetchData = new Fetcher();
  const data = await FetchData.getDetails(id);

  return NextResponse.json(data);
}
