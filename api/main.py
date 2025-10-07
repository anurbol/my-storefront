from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

products = {
  i: {
    "id": i,
    "title": f"Product {i}",
    "price": round(random.random() * (random.random() * 10), 2),
    "description": f"Description for product {i}.",
    "image": f"/images/product.jpg",
  } for i in range(1, 15)
}

@app.get("/products")
def get_products():
  # I aknowledge the room for optimisation here - to not dynamically create a list out of the dict every time.
  return list(products.values())

@app.get("/product/{product_id}")
def get_product(product_id: int):
  return products.get(product_id)
