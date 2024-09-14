import AnimatedWrapper from "../ui/AnimatedWrapper";
import Container from "../ui/Container";

import { clients } from "../../data/our-clients";  // Import the clients array

const OurClients = () => {
  return (
    <Container>
      <h3 className="my-10 text-4xl font-semibold text-center hover:text-red-600 duration-300 transition-all">
        <strong>OUR ESTEEMED CLIENTS</strong>
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center max-w-screen-xl mx-auto my-8">
        {clients.map((client) => {
          return (
            <AnimatedWrapper animateFrom="right" key={client.id}>
              <div className="size-20 md:size-28 lg:size-32 hover:scale-105 duration-500 transition-all bg-white mx-auto">
                <img
                  src={client.image}  // Dynamically insert client's image
                  alt={client.name}    // Alt text as the client’s name
                  className="w-full h-full object-contain"  // Styling the image to fit properly
                />
              </div>
              <p className="text-center mt-2 font-semibold hover:text-red-600">{client.name}</p>  {/* Client name below the image */}
            </AnimatedWrapper>
          );
        })}
      </div>
    </Container>
  );
};

export default OurClients;

