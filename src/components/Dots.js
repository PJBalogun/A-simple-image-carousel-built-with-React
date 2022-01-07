const Dots = ({ activeIndex, onclick, imageSlider }) => (
  <div className="all-dots">
    {imageSlider.map((slide, index) => (
      <span
        key={index}
        className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
        onClick={() => onclick(index)}
      ></span>
    ))}
  </div>
);

export default Dots;
