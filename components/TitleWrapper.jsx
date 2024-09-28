const TitleWrapper = ({
  title,
  description,
  containerStyles,
  titleStyles,
  descriptionStyles,
}) => (
  <div
    className={`mx-auto w-[250px]  space-y-5 xs:!w-[60vw] md:!w-[70vw] md:space-y-10 lg:!w-[60vw] lg:space-y-5 ${containerStyles}`}
  >
    <h2 className={`title mt-[55px] md:mt-[75px] ${titleStyles}`}>{title}</h2>
    <p className={descriptionStyles}>{description}</p>
  </div>
);

export default TitleWrapper;
