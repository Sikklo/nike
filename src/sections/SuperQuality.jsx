import Button from "../components/Button"
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <br />
          <span className="text-coral-red">Super </span>
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="view detail"/>
      </div>
    </section>
  );
}

export default SuperQuality
