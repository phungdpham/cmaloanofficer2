import React from 'react';

function SectionHeader(props) {
  // Render nothing if no title or subtitle
  if (!props.title && !props.subtitle && !props.strapline) {
    return null;
  }
  return (
    <header
      className={
        'mb-8 last:mb-0' + (props.className ? ` ${props.className}` : '')
      }
    >
      {props.strapline && (
        <div className="text-sm uppercase font-bold tracking-wider mb-1 text-amber-700">
          {props.strapline}
        </div>
      )}

      {props.image && (
        <div className="relative">
          <div className="absolute pattern-dots text-blue-100 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3" />
          <div className="absolute pattern-dots text-blue-100 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3" />
          <div className="absolute rounded-full top-0 right-0 w-32 h-32 bg-yellow-200 bg-opacity-50 -mt-12 -mr-12" />
          <div className="absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-blue-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-3" />
          <img
            className="w-full h-96 lg:w-96 lg:h-auto relative object-cover rounded-lg mx-auto shadow-lg"
            src={props.image}
            alt=""
          />
        </div>
      )}

      {props.title && (
        <h1 className="text-3xl md:text-4xl font-extrabold">{props.title}</h1>
      )}

      {props.subtitle && (
        <h2 className="mt-4 inline-block text-lg md:text-xl md:leading-relaxed font-medium max-w-screen-md opacity-80">
          {props.subtitle}
        </h2>
      )}
    </header>
  );
}

export default SectionHeader;
