import React from 'react';
import Stack from './Stack';
import getTechnologies from './technologies-get';

export default function Technologies() {
    return (
      <div>
        <div className='container'>
          {
            // array.map(arrow_function)
            // where arrow_function is
            // parameter => function_definition
            getTechnologies().map(stack2 => (
              <Stack
              key={stack2.id}
              id={stack2.id}
              name={stack2.name}
              logo={stack2.logo} />
            ))
          }
        </div>
      </div>
    );
  }
  
  