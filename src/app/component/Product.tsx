import React from 'react';
import Image from 'next/image';
import one from '../../Assets/1.jpeg'; 
import two from '../../Assets/2.jpeg'; 
import three from '../../Assets/3.jpeg';  
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Nike Air Max',
    description: 'Comfortable and stylish sneakers for everyday wear.',
    image: one,
    url: "/service/1",
  },
  {
    id: 2,
    name: 'Nike Dri-FIT Shirt',
    description: 'Breathable and moisture-wicking shirt for optimal performance.',
    image: two,
    url: "/service/2",
  },
  {
    id: 2,
    name: 'Nike Dri-FIT Shirt',
    description: 'Breathable and moisture-wicking shirt for optimal performance.',
    image: three,
    url: "/service/3",
  },
];

export default function Products() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  <Link href={product.url}>Buy</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
