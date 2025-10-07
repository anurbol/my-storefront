import { API_HOST, FRONTEND_HOST } from "@/lib/api";
import { Product } from "@/types/product";
import { PageProps } from "@/types/common";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductPage({params}: PageProps<Params>) {
  const p = await params

  const product: Product | null = await getProduct(p.id)
  if (!product) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-5">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-1">
          <Image src={product.image} alt={product.title} width={600} height={600}>
          </Image>
        </div>
        <div className="flex-2">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="text-lg font-semibold mb-2">${product.price}</div>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Add to cart
          </button>
        </div>

      </div>
    </div>
  )
}

export async function generateMetadata({params}: PageProps<Params>) {
  const p = await params
  
  const { title, description, image } = await getProduct(p.id);
  const ogImage = `/api/og?title=${encodeURIComponent(title)}&image=${encodeURIComponent('https://mediamodifier.com/blog/wp-content/uploads/2019/07/standing-software-product-box-mockup-maker-1024x683.jpeg')}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: ogImage }],
    },
  };
}

async function getProduct(id: number) {
  const url = `${API_HOST}/product/${id}`
  return (await fetch(url)).json()
}

interface Params {
  id: number
}