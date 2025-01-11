const Heading = ({ children }) => {
    return (
      <h1
        style={{ fontFamily: 'Pirata One, sans-serif' ,
          textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)",
        }}       
        className="text-[50px] sm:text-[70px] md:text-[7rem] text-center 2xl:mt-0 lg:mt-4 md:mt-4 sm:mt-3 bg-transparent"
      >
        {children}
      </h1>
    );
  };
  
  export default Heading;
  