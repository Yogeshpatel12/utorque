import AnimatedWrapper from "../components/ui/AnimatedWrapper";
import Container from "../components/ui/Container";

import { applications } from '../data/applications';

const Applications = () => {
  return (
    <Container>
      <div className="text-center  mx-auto max-w-[480px] space-y-5 my-5 ">
        <h2 className="text-4xl font-bold hover:text-red-600 duration-300 transition-all"><strong>Applications</strong></h2>
        <p className="text-md text-justify font-semibold hover:text-red-600 duration-300 transition-all">
          <strong>UNIQUE DC MOTOR BRAKE AND CLUTHES</strong> has proudly served a wide range of industrial
          applications with our high-quality range of products and technical
          expertise. With the help of long technical experience and a committed
          sale, service support - today we have become a trusted partner for the
          need of Brakes, Clutches & Torque Limiters.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center max-w-screen-2xl mx-auto my-10">
        {applications.map((application) => {
          return (
            <AnimatedWrapper animateFrom="right" key={application.id}>
              <div className="size-70 sm:size-80 p-2 bg-white  hover:scale-105 duration-500 transition-all mx-auto " >
              <img
                  src={application.image}  // Dynamically insert client's image
                  alt={application.name}    // Alt text as the client’s name
                  className="w-full h-full object-contain"  // Styling the image to fit properly
                />
              </div>
              <p className="text-center mt-2 text-xl font-semibold hover:text-red-600">{application.name}</p>  {/* Client name below the image */}
            </AnimatedWrapper>
          );
        })}
      </div>
    </Container>
  );
};

export default Applications;
