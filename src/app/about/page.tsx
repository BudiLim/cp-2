import Image from "next/image";
import Nike from "../../Assets/• 3 Enseñanzas de Phil Knight, el emprendedor creador de Nike_.jpeg";
import Ceo from "../../Assets/ceo.jpeg";
import Chief from '../../Assets/chief.jpeg';
import Quality from '../../Assets/qualitiy.jpeg';
import Marketing from '../../Assets/marketing.jpeg';

export default function AboutUs() {
    return (
        <section className="px-6 py-12 bg-gray-100">
            <div className="container mx-auto">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Company History</h2>
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-4">
                        <Image
                            src={Nike}
                            alt="Nike history"
                            className="w-full md:w-1/3 h-auto object-cover rounded-lg shadow-lg"
                        />
                        <p className="text-lg">
                            Nike, Inc. was founded on January 25, 1964, by Bill Bowerman and Phil Knight as Blue Ribbon Sports. The company officially became Nike, Inc. on May 30, 1971. Since then, Nike has grown into a global leader in sportswear and footwear, known for innovation and performance. Key milestones include the introduction of the Air Jordan line in 1984 and the launch of the Nike+ platform in 2006.
                        </p>
                    </div>
                </div>

                {/* Team */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/3 p-4">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <Image
                                    src={Ceo}
                                    alt="John Doe"
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                                />
                                <h3 className="text-xl font-semibold text-center">John Doe</h3>
                                <p className="text-gray-600 text-center">CEO</p>
                                <p className="mt-2 text-center">
                                    John has been with Nike since 2001, leading the company through significant growth and innovation. His vision for the future continues to drive Nike&apos;s success.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-4">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <Image
                                    src={Chief}
                                    alt="Jane Smith"
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                                />
                                <h3 className="text-xl font-semibold text-center">Jane Smith</h3>
                                <p className="text-gray-600 text-center">Chief Marketing Officer</p>
                                <p className="mt-2 text-center">
                                    Jane joined Nike in 2010 and has played a crucial role in shaping the brand&apos;s global image. Her creative strategies have expanded Nike&apos;s market presence significantly.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-4">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <Image
                                    src={Marketing}
                                    alt="Alice Johnson"
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                                />
                                <h3 className="text-xl font-semibold text-center">Alice Johnson</h3>
                                <p className="text-gray-600 text-center">Marketing Manager</p>
                                <p className="mt-2 text-center">
                                    Alice has been with Nike since 2015, bringing innovative marketing campaigns to life. Her expertise in digital marketing has helped Nike reach new audiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Our Culture</h2>
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-4">
                        <Image
                            src={Quality}
                            alt="Nike culture"
                            className="w-full md:w-1/3 h-auto object-cover rounded-lg shadow-lg"
                        />
                        <p className="text-lg">
                            At Nike, we are driven by a passion for sports and innovation. Our culture is built on teamwork, creativity, and a commitment to excellence. We believe in empowering our employees and fostering an environment where they can thrive and contribute to our mission of bringing inspiration and innovation to every athlete in the world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
