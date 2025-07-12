import AnimatedTestimonialsDemo from "./animated-testimonials-demo";

function Testimonials() {
  return (
    <section className="py-24 px-4 bg-gray-900 flex flex-col items-center justify-center" id="testimonials">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-['Poppins'] z-10 drop-shadow-lg">What students say about us:</h2>
      <AnimatedTestimonialsDemo />
    </section>
  );
}

export default Testimonials; 