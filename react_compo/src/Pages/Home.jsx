import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="grid m-10 grid-cols-4">
      <div>
        <Link to={"/loginpageone"}>
          <button className="bg-channel_yellow py-1 px-2 uppercase font-extrabold hover:bg-channel_green hover:text-white rounded-lg texy-xl">
            Login Page one
          </button>
        </Link>
      </div>

      <div>
        <Link to={"/ioscalculator"}>
          <button className="bg-channel_yellow hover:bg-channel_green uppercase font-extrabold py-1 px-2 rounded-lg hover:text-white">
            IOS Calculator
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
