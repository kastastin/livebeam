const TitleWrapper = ({ title, description, titleStyles }) => (
  <div className="mx-auto w-[250px] space-y-5">
    <h2 className={`title mt-[55px] ${titleStyles}`}>{title}</h2>
    <p>{description}</p>
  </div>
);

export default TitleWrapper;
