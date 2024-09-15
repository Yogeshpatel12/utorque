import AnimatedWrapper from "../components/ui/AnimatedWrapper";
import Container from "../components/ui/Container";
import { products } from "../data/products";

const Products = () => {
  return (
    <Container>
      <div className="text-center  mx-auto max-w-[1280px] space-y-5 my-5 ">
        <h2 className="text-4xl font-bold hover:text-red-600 duration-300 transition-all">
          <strong>OUR PRODUCTS</strong>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center max-w-screen-2xl mx-auto my-10">
        {products.map((product) => {
          return (
            <AnimatedWrapper animateFrom="right" key={product.id}>
              <div className="size-70 sm:size-80 p-2 bg-white  hover:scale-105 duration-500 transition-all mx-auto ">
                <img
                  src={product.preview_image} // Dynamically insert client's image
                  alt={product.name} // Alt text as the client’s name
                  className="w-full h-full object-contain" // Styling the image to fit properly
                />
              </div>
              <p className="text-center mt-2 text-xl font-bold hover:text-red-600">
                {product.name}
              </p>{" "}
              {/* Client name below the image */}
              {/* Display product description */}
              {/* Display product features */}
              <div className="text-center mt-2">
                {product.features.length > 0 ? (
                  <ul className="list-disc list-inside">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No specific features available</p>
                )}
              </div>
              <p className="text-center text-sm mt-2 m-8">
                {product.description}
              </p>
            </AnimatedWrapper>
          );
        })}
      </div>
      <div className="text-center  mx-auto max-w-[1390px] space-y-5 my-5 ">
        <h2 className="text-2xl font-bold hover:text-red-600 duration-300 transition-all">
          <strong>OUR PRODUCT'S DESCRIPTION</strong>
        </h2>
        <p className="text-md text-justify font-semibold hover:text-red-600 duration-300 transition-all">
          <ol>
            <li>
              1. <strong>SPRING LOADED FAIL SAFE BRAKE</strong> : A durable brake with cast iron
              construction, offering high torque and reliable safety
              performance.
            </li>
            <li>
              2. <strong>FLANGE MOUNTED BRAKES AND CLUTCHES</strong> : Cast iron brakes and clutches
              designed for high-torque applications with various voltage
              options.{" "}
            </li>
            <li>
            3. <strong>ALUMINIUM DISC LINER</strong> : High-torque disc liners made of cast iron,
              suitable for demanding industrial applications.
            </li>
            <li>
            4. <strong>CLUTCH AND BRAKE COMBINATION</strong> :  Reliable combination of clutch and
              brake with cast iron build, ideal for smooth torque transition.
            </li>
            <li>
            5. <strong>BRAKE MOTORS</strong> :  High-performance brake motors with multiple voltage
              and power options for various industrial uses.
            </li>
            <li>
            6. <strong>TRANSFORMERS AND RECTIFIERS</strong> :  Cast iron transformers and rectifiers
              offering optimal torque management in heavy-duty applications.
            </li>
            <li>
            7. <strong>ELECTROHYDRAULIC THRUSTER BRAKE</strong> :  Heavy-duty brake system with high
              torque and substantial weight capacity for industrial operations.
            </li>
            <li>
            8. <strong>NMRV GEAR BOX</strong> :  Compact worm gear box with high power and robust
              cast iron construction for versatile applications.
            </li>
          </ol>
        </p>
      </div>
    </Container>
  );
};

export default Products;
