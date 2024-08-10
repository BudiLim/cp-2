import React from 'react';

const Section = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Company Overview */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Company Overview</h3>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Nike, Inc., founded in 1964, is a global leader in athletic footwear, apparel, and equipment. Headquartered in Beaverton, Oregon, Nike operates worldwide, bringing innovation and quality to athletes of all levels.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Nike's mission is to "bring inspiration and innovation to every athlete* in the world." With groundbreaking products and a commitment to sustainability, Nike continues to set industry standards and inspire millions.
          </p>
        </div>

        {/* History */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">History</h3>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Nike was founded by Bill Bowerman and Phil Knight in 1964 as Blue Ribbon Sports. It officially became Nike, Inc. in 1971, named after the Greek goddess of victory. Since then, Nike has been at the forefront of sports innovation, developing products like the Nike Air technology and the Nike+ ecosystem.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            The company has expanded its influence through high-profile endorsements and partnerships with athletes and teams. Nike's innovative marketing and product development have solidified its position as a global icon in sportswear.
          </p>
        </div>

        {/* Our Team */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Nike’s team comprises diverse talents from around the globe. From product designers who craft cutting-edge footwear to engineers who develop advanced materials, each member contributes to Nike's mission of enhancing athletic performance.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            The company values collaboration and continuous improvement, fostering a culture where creativity and innovation thrive. Nike’s leadership team, including experienced executives and visionary leaders, drives the company's strategic direction and growth.
          </p>
        </div>

        {/* Culture */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Culture</h3>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Nike’s culture is rooted in its commitment to diversity, inclusion, and excellence. The company promotes a dynamic work environment where employees are encouraged to embrace new ideas, challenge norms, and push boundaries.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Nike’s corporate culture is supported by initiatives that foster community engagement, social responsibility, and environmental sustainability. Employees are empowered to contribute to Nike’s broader mission of making a positive impact on society and the planet.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Section;
