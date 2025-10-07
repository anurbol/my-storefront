import { Card, CardContent } from "@/components/ui/card";
import { API_HOST } from "@/lib/api";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const products: Product[] = await getProducts();

  return (
    <main>
      <h1 className="text-3xl font-semibold m-5">My Storefront</h1>
      {products.length === 0 ? (
        <div>No products found.</div>
      ) : (
        <div className="m-5 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`}>
              <Card>
                <CardContent className="p-4 flex flex-col items-center">
                  <Image src={p.image} alt={p.title} width={200} height={200}/>
                  <h2 className="text-center font-medium">{p.title}</h2>
                  <div>${p.price}</div>
                </CardContent>
              </Card>

            </Link>
            
          ))}
        </div>
      )}
      
    </main>
  )
}

async function getProducts() {
  const url = `${API_HOST}/products`
  return (await fetch(url)).json()
}