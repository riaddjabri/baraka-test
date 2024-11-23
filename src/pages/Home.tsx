import MotivationQuote from "../components/MotivationQuote";
import {Link} from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div className='flex justify-center flex-col gap-4 items-center bg-secondary-black h-full'>
        <MotivationQuote  color='white'/>
        <Link to='/tasks' className='rounded-full bg-black text-white px-4 py-2'>
            Start creating your Tasks now!
        </Link>

    </div>
  );
}

export default Home