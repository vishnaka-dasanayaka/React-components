import Attendance from "../components/Attendance";
import Batch from "../components/Batch";
import IndividualAttendance from "../components/IndividualAttendance";
import Sidebar from "../components/Sidebar";


function Home() {
  return (
    <div >
      <div className="flex">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-1/4 ">
          <Batch />
        </div>

        <div className="w-2/4">
          <Attendance />
        </div>
      </div>
    </div>
  );
}

export default Home;
