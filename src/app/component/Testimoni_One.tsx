import React from 'react';
import Marquee from 'react-fast-marquee';

const testimonials = [
    {
        id: 1,
        name: 'Jane Doe',
        position: 'Marketing Manager',
        company: 'ABC Corp',
        testimonial: 'Nike products have truly transformed our team’s performance. The quality and innovation are unmatched!',
      },
      {
        id: 2,
        name: 'John Smith',
        position: 'Fitness Enthusiast',
        company: 'Freelancer',
        testimonial: 'I’ve been using Nike gear for years, and it never fails to impress. The comfort and durability are fantastic.',
      },
      {
        id: 3,
        name: 'Emily Johnson',
        position: 'Professional Runner',
        company: 'Athlete',
        testimonial: 'Nike’s running shoes are the best I’ve ever used. They provide excellent support and comfort for long-distance running.',
      },
      {
        id: 4,
        name: 'Michael Brown',
        position: 'Basketball Coach',
        company: 'XYZ High School',
        testimonial: 'Nike’s sportswear has been a game-changer for my team. Their products are durable and perform well on the court.',
      },
      {
        id: 5,
        name: 'Sarah Williams',
        position: 'Yoga Instructor',
        company: 'Serenity Studio',
        testimonial: 'Nike’s activewear is perfect for yoga. The flexibility and breathability help me move freely during my sessions.',
      },
      {
        id: 6,
        name: 'David Lee',
        position: 'Triathlete',
        company: 'Elite Sports',
        testimonial: 'Nike’s gear is designed with athletes in mind. From running to swimming, their products support me through every challenge.',
      },
      {
        id: 7,
        name: 'Laura Martinez',
        position: 'Fitness Blogger',
        company: 'Fitness Fusion',
        testimonial: 'Nike’s stylish and functional gear makes it easy to stay motivated. I love their trendy designs and high-performance materials.',
      },
      {
        id: 8,
        name: 'Chris Wilson',
        position: 'Sports Therapist',
        company: 'Active Rehab',
        testimonial: 'Nike’s footwear technology has helped many of my patients recover from injuries faster. Their products offer great support and comfort.',
      },
      {
        id: 9,
        name: 'Amanda Taylor',
        position: 'Competitive Swimmer',
        company: 'Aquatic Club',
        testimonial: 'Nike’s swimwear is top-notch. It’s durable, fits perfectly, and enhances my performance in the pool.',
      },
      {
        id: 10,
        name: 'James Anderson',
        position: 'Personal Trainer',
        company: 'FitLife Gym',
        testimonial: 'Nike’s workout gear is both functional and fashionable. It withstands the toughest workouts while looking great.',
      },
  // Add more testimonials as needed
];

export default function Testimoni() {
  return (
    <section className="py-12">
      <div className="w-full mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <Marquee gradient={false} speed={70} className= "p-4 shadow-sm">
          <div className="flex space-x-8 pt-2 pb-2">
            {testimonials.map(({ id, name, position, company, testimonial }) => (
              <div key={id} className="flex-none min-w-[300px] p-4 rounded-lg bg-slate-100 ">
                <p className="text-gray-700 italic">"{testimonial}"</p>
                <p className="font-semibold mt-2">{name}</p>
                <p className="text-gray-500">{position} at {company}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
