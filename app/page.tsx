"use client";

import { useState } from "react";
import ProductCard from "@/components/product-card";
import SelectControl from "@/components/select-control";
import { SelectOption } from "@/types";

type Product = {
  id: number;
  name: string;
  price: number;
  category: "electronics" | "clothing";
};

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1200, category: "electronics" },
  { id: 2, name: "Headphones", price: 200, category: "electronics" },
  { id: 3, name: "Jacket", price: 150, category: "clothing" },
  { id: 4, name: "Shoes", price: 90, category: "clothing" },
];

const categoryOptions: SelectOption[] = [
  { value: "all", label: "All Products" },
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
];

const sortOptions: SelectOption[] = [
  { value: "default", label: "Default" },
  { value: "low", label: "Price Low → High" },
  { value: "high", label: "Price High → Low" },
];

export default function HomePage() {
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  let filtered = [...products];

  if (filterCategory !== "all") {
    filtered = filtered.filter(
      (p) => p.category === filterCategory
    );
  }

  if (sortBy === "low") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-6">

        <h1 className="text-4xl font-bold">
          Product Filter App
        </h1>

        <div className="flex flex-col md:flex-row gap-4">
          <SelectControl
            selectLabel="Category:"
            value={filterCategory}
            onValueChange={setFilterCategory}
            options={categoryOptions}
          />

          <SelectControl
            selectLabel="Sort:"
            value={sortBy}
            onValueChange={setSortBy}
            options={sortOptions}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

      </div>
    </main>
  );
}
