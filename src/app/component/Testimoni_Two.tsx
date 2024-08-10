const testimonials = [
    {
      name: "Curry",
      feedback: "This service was amazing!",
    },
    {
      name: "Kevin Durant",
      feedback: "I highly recommend this company.",
    },
    {
      name: "lebron James",
      feedback: "Great experience overall.",
    },
  ];
export default function Testimoni2 () {
    return (
        <div className="bg-white pt-1 mb-1">
        <h2 className="text-2xl font-bold mt-8 mb-4 text-center">Testimonials</h2>
        <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-900">{testimonial.feedback}</p>
            <p className="text-gray-600 font-bold mt-2">- {testimonial.name}</p>
            </div>
        ))}
        </div>
    </div>
    )
}