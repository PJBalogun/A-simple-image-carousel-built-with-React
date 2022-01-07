const SliderContent = ({ activeIndex, imageSlider }) => {
  console.log(activeIndex, imageSlider);
  return (
    <section>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={`${index === activeIndex ? "slides active" : "inactive"}`}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <h2 className="slide-title">{slide.title}</h2>
        </div>
      ))}
    </section>
  );
};

export default SliderContent;
