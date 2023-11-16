import Sidebar from "../components/Sidebar"
import Batch from "../components/Batch"
import IndividualAttendance from "../components/IndividualAttendance"

function StudentAttendance() {
  return (
    <div>
       <div >
      <div className="flex">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-1/4 ">
          <Batch />
        </div>

        <div className="w-2/4">
          <IndividualAttendance />
        </div>
      </div>
    </div>
    </div>
  )
}

export default StudentAttendance
