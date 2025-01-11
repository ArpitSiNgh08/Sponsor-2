const SubHeading = ({ children }) => {
    return (
      <h1
        style={{ fontFamily: 'Jacques Francois, sans-serif' }}
        className="text-4xl mb-2 mt-1 xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-7xl text-center 2xl:mt-6 xl:mt-7 lg:mt-12 md:mt-8 sm:mt-8 xs:mt-8 lg:m-3.5 md:mb-3  sm:m-3 sm:mb-2 bg-transparent"
      >
        {children}
      </h1>
    );
  };
  
  export default SubHeading;
  