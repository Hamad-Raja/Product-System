"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products"); 
      setProducts(res.data);
    } catch (err) {
      toast.error("Failed to load products");
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      toast.success("Product deleted");
      fetchProducts();
    } catch (err) {
      toast.error("Failed to delete");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-8 bg-black min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Product List</h1>
        <Link
          href="/products/add"
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-lg shadow hover:scale-105 transition-transform"
        >
          Add Product
        </Link>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white uppercase text-sm">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p, idx) => (
              <tr
                key={p.id}
                className={idx % 2 === 0 ? "bg-gray-900 text-white" : "bg-gray-800 text-white"}
              >
                <td className="p-3">{p.id}</td>
                <td className="p-3">{p.name}</td>
                <td className="p-3">${p.price}</td>
                <td className="p-3">{p.category}</td>
                <td className="p-3 flex gap-2">
                  <Link
                    href={`/products/edit/${p.id}`}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg shadow transition"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(p.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg shadow transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
