import React from 'react';

function Container({children}) {
    return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>
}

export default Container;

//A tiny reusable layout wrapper — centers content, caps its width, adds horizontal padding. 
// Used inside Header and Footer so both share consistent page-edge alignment.