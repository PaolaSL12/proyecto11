const ImgPage = ({src, alt, funct, disabled, setPage}) => {
  return (
    <img
      src={src}
      alt={alt}
      onClick={() => {
        setPage(funct);
      }}
      disabled={disabled}
    />
  );
};

export default ImgPage
