import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Batch() {
  return (
    <div className="h-screen flex flex-col">
      <ul className="mt-32">
        <li className="bg-primary rounded-lg mx-2 px-3 py-2 mb-10">
          EE6302 : Control System Design
          <ArrowForwardIosIcon className="ml-10 scale-75" />
        </li>
        
        <li className="bg-green-950 text-white rounded-lg mx-2 px-3 py-2">
          EE6303 : Electric Machines II
          <ArrowForwardIosIcon className="ml-10 scale-75" />
        </li>
      </ul>
    </div>
  );
}
