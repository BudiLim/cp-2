import { notFound } from 'next/navigation';
import Image from 'next/image';
import { FC } from 'react';
import type { StaticImageData } from 'next/image';
import foto1 from "../../../Assets/1.jpeg";
import foto2 from "../../../Assets/2.jpeg";
import foto3 from "../../../Assets/3.jpeg";
import foto4 from "../../../Assets/4.jpeg";
import foto5 from "../../../Assets/5.jpeg";
import foto6 from "../../../Assets/6.jpeg";
import Link from 'next/link';
import Testimoni2 from '@/app/component/Testimoni_Two';

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image:StaticImageData;
};

const services: Product[] = [
    {
        id: 1,
        name: "Nike Mens's Air Max",
        description: "Nike Mens Air Max shoes offer iconic design, superior comfort, and Air cushioning for great support. Ideal for sports and daily wear.",
        price: "$200",
        image: foto1,
      },
      {
        id: 2,
        name: "Nike Air Monarch",
        description: "Nike Air Monarch shoes provide lasting comfort, durable support, and a classic look, making them perfect for both training and everyday wear.",
        price: "$200",
        image: foto2,
      },
      {
        id: 3,
        name: "Nike Air Max Excee Shoes",
        description: "Nike Air Max Excee offers modern style and lightweight comfort with classic Air Max cushioning. Ideal for everyday wear.",
        price: "$200",
        image: foto3,
      },
      {
        id: 4,
        name: "Nike Spark Women's",
        description: "Nike Spark Women's shoes blend lightweight comfort with a sleek design, perfect for everyday wear and light workouts.",
        price: "$200",
        image: foto4,
      },
      {
        id: 5,
        name: "Nike Men's Vomero 17",
        description: "Nike Men's Vomero 17 offers plush cushioning and a smooth ride, designed for long-distance comfort and support.",
        price: "$200",
        image: foto5,
      },
      {
        id: 6,
        name: "Nike Air Zoom Pegasus 40 P",
        description: "Nike Air Zoom Pegasus 40 P delivers responsive cushioning and a secure fit, ideal for running and active use.",
        price: "$200",
        image: foto6,
      },
  
];

const getProductById = (id: number) => {
  return services.find((item) => item.id === id) || null;
};

interface ProductDetailProps {
  params: {
    id: string;
  };
}

const ProductDetail: FC<ProductDetailProps> = async ({ params }) => {
  const productId = parseInt(params.id, 10);
  const product = getProductById(productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mt-4 mb-6">{product.name}</h1>
      <div className="max-w-2xl mx-auto">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover mb-4"
          width={500}
          height={300}
          layout="responsive"
        />
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-gray-900 font-bold mb-4">{product.price}</p>
        <div className='flex justify-between '>
            <Link href={'/product'} className="bg-[#5e6b5e] text-white px-4 py-2 rounded hover:bg-[#213021] transition duration-300">Back</Link>
            <Link href={'/coming_soon'} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Buy</Link>
        </div>
      </div>
      <Testimoni2/>
    </div>
  );
};

export default ProductDetail;
