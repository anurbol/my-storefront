
import { ImageResponse } from "next/og";

export const runtime = "edge"

// I copied this whole function from the web.
export async function GET(req: Request) {
  const {searchParams} = new URL(req.url);

  const title = searchParams.get('title') || 'product';
  const image = searchParams.get('image');

  return new ImageResponse(
    (
      <div style={{background: "#fff", width: "100%", height: "100%"}}>
        {image && <img src={image} width={300} height={300} />}
        <p>{title}</p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}