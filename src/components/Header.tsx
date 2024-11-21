import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className='bg-black text-white px-4 py-6 flex flex-row justify-between w-full'>
      <div className='flex '>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
      </div>
      <Link to="/login">Login</Link>
    </header>
  );
}

export default Header