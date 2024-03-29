import LoginCard from "@/components/homepage/LoginCard";
import Footer from "@/components/layout/Footer";

const Home = () => {
  return (
    <section
      className="flex flex-center flex-col w-full 
            items-center justify-center"
    >
      <h1 data-test="heading-one" className="head_text text-center">
        homeHub
        <br className="max-md:hidden" />
        <span data-test="heading-two" className="text-center orange_gradient">
          Get Your Shit Together
        </span>
      </h1>
      <p data-test="homepage-description" className="desc text-center">
        Organize your life and keep track of tasks that need to be done to keep
        your house in order.
      </p>
      <LoginCard />
      <Footer />
    </section>
  );
};

export default Home;
