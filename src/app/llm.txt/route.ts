import { GET as handler } from "@/app/llms.txt/route";

export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours

export async function GET() {
  return handler();
}
