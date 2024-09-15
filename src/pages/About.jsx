const About = () => {
  return (
    <div class="py-2 relative min-h-screen bg-black">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url('images/bgimg.jpg')` }}
      />
      <div class="relative min-h-screen container mx-auto px-4 bg-gray-900 bg-opacity-60">
        <h1 class="text-white text-2xl font-semibold mb-4 py-8  pt-20 hover:text-red-600 duration-300 transition-all">
          <strong>ABOUT US</strong>
        </h1>
        <h1 class=" text-white text-2xl font-semibold mb-4 hover:text-red-600 duration-300 transition-all">
          <strong>Welcome to UNIQUE DC MOTOR BRAKE AND CLUTHES </strong>
        </h1>
        <p class="text-white mb-6 font-bold hover:text-red-600 duration-300 transition-all ">
          We’re dedicated to providing you the very best product. Founded in
          [2019] by [UNIQUE DC MOTOR BRAKE], UNIQUE DC MOTOR BRAKE has come a
          long way from its beginnings. First started out, his passion for
          quality products drove them to start their own business. We hope you
          satisfy with our products as much as we enjoy offering them to you. If
          you have any questions or comments, please don’t hesitate to Contact
          us
        </p>
        <p class="text-white mb-6 font-bold hover:text-red-600 duration-300 transition-all ">
          Sincerely, UNIQUE DC MOTOR BRAKE"UNIQUE DC MOTOR BRAKE group founded
          in 2019, positioned itself as the pioneer of innovation in designing,
          development & manufacturing of industrial Electromagnetic Brakes and
          cluthes , combinations and allied products With five thousand (5000)
          square meter of production area capable of producing 2400 units per
          year, we are serving to various segments of domestic and overseas
          industries and has lot of renowned brands as our customers.
        </p>
        {/* <!-- Add more content here (e.g., product details, achievements, etc.) --> */}
        <p class="text-white font-bold hover:text-red-600 duration-300 transition-all">
          UNIQUE DC MOTOR BRAKE is one of the most recognized brands of AC & DC
          Brakes in India having our manufacturing plants – at Udaipur,
          (Rajasthan). We have compelling presence in AC & DC Brakes all over
          India. We have registered noticeable growth in sales year over years.
          With our Head-Office at Udaipur. we have a large chain of sales
          network. To give required support to our customers. UNIQUE DC MOTOR
          BRAKE is specialized in designing, developing and manufacturing high
          performance,configurable standard products right from clutches and
          brakes, from simple to complex applications, with wide operational
          scope like Navy Deck Machinery to highly sophisticated Rocket
          Launchers, Tyre Industry, Cement Plants, Wind Turbines, Textile
          machines, Printing Machines, Marble Cutting Machines, Stone polishing
          Machines, Steel Plant Machineries, Packaging Machines, Pick & Place
          Robots, Conveyors, Paper Machines, Coil Winding Machines, Material
          Handling Equipments, Cranes & Hoistsand many more.
        </p>
        <p class="text-white mt-6 font-bold hover:text-red-600 duration-300 transition-all">
          We have dedicated department which is engaged in further development
          of series of products and optimization of customized solutions based
          on experience and the latest findings from applications. UNIQUE DC
          MOTOR BRAKE has a system of Global purchasing of components and
          sub-assemblies with Modern Manufacturing and warehouse technology, as
          well as CNC & VMC machinery Installed thus offering perfect conditions
          for fast assembly of different products with quick delivery times.
        </p>
        <p class="text-white mt-6 font-bold hover:text-red-600 duration-300 transition-all">
          We source out best of raw material from India and abroad. UNIQUE DC
          MOTOR BRAKEBrand is well known for its customer satisfaction and this
          could only be possible through our strong technical experts who are
          continuously achieving their best in terms of accuracy & quality
          standards thus making us a major player in the industry circle.
        </p>
        <p class="text-white mt-6 font-medium hover:text-red-600 duration-300 transition-all">
          Sincerely , 
          
          <strong>UNIQUE DC MOTOR BRAKE.</strong>
        </p>
        
        <div className="text-white mt-8 text-center text-xl font-semibold hover:text-red-600 duration-300 transition-all ">
          <strong>OUR CERTIFICATE</strong>
        </div>
        <div className="mx-auto pt-4 w-full sm:w-3/4 md:w-1/2">
          <img src="images/certificate.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
