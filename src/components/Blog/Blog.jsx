import React from 'react';


const Blog = () => {
    return (
        // <section className="mx-20 space-y-4 my-10">
        //     <h1 className='font-bold text-2xl text-center'>Blog</h1>
        //     <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        //         <div className="collapse-title text-xl font-medium">
        //            <p>1. When should you use context API?</p> 
        //         </div>
        //         <div className="collapse-content"> 
        //           <p className="font-semibold">Context API should be used when there are many components and a state needs to pass through components. Basically to avoid props drilling</p>
        //         </div>
        //       </div>
        //       <div index={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        //         <div className="collapse-title text-xl font-medium">
        //           <p>2. What is a custom hook?</p>
        //         </div>
        //         <div className="collapse-content"> 
        //           <p className="font-semibold">Custom Hooks are reuseable functions in react that are customized and built for specific task and can be used in different components</p>
        //         </div>
        //       </div>
        //       <div index={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        //         <div className="collapse-title text-xl font-medium">
        //           <p>3. What is useRef?</p>
        //         </div>
        //         <div className="collapse-content"> 
        //           <p className="font-semibold">useRef is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .</p>
        //         </div>
        //       </div>
        //       <div index={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        //         <div className="collapse-title text-xl font-medium">
        //           <p>4. What is useMemo?</p>
        //         </div>
        //         <div className="collapse-content"> 
        //           <p className="font-semibold">useMemo is a React Hook that let us cache the result of a calculation between re-renders. That stores expensive functions so that they don't need to be re-rendered every time.</p>
        //         </div>
        //       </div>
        // </section>
        <div className='mt-20'>
          <div className='bg-violet-50 border rounded-md text-center p-10 mb-5'>
            <h1 className='text-5xl font-extrabold mb-4'>When should you use context API?</h1>
            <p className='text-xl font-semibold text-slate-500'>Context API should be used when there are many components and a state needs to pass through components. Basically to avoid props drilling</p>
          </div>
          <div className='bg-violet-50 border rounded-md text-center p-10 mb-5'>
            <h1 className='text-5xl font-extrabold mb-4'>What is a custom hook?</h1>
            <p className='text-xl font-semibold text-slate-500'>Custom Hooks are reuseable functions in react that are customized and built for specific task and can be used in different components</p>
          </div>
          <div className='bg-violet-50 border rounded-md text-center p-10 mb-5'>
            <h1 className='text-5xl font-extrabold mb-4'>What is useRef?</h1>
            <p className='text-xl font-semibold text-slate-500'>useRef is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .</p>
          </div>
          <div className='bg-violet-50 border rounded-md text-center p-10 mb-5'>
            <h1 className='text-5xl font-extrabold mb-4'>What is useMemo?</h1>
            <p className='text-xl font-semibold text-slate-500'>useMemo is a React Hook that let us cache the result of a calculation between re-renders. That stores expensive functions so that they don't need to be re-rendered every time.</p>
          </div>
        </div>
    );
};

export default Blog;