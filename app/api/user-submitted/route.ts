import { contentfulApi } from "@/api/contentful";
import { contentfulManagementApi } from "@/api/contentfulManagement";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = await contentfulManagementApi.createUserSubmitted(body);
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: `Failed because of ${error}` },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const data = await contentfulApi.getListUserSubmitted(0);
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: `Failed because of ${error}` },
      { status: 500 }
    );
  }
}
