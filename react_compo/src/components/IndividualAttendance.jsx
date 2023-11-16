import { Link } from "react-router-dom"

function IndividualAttendance() {
  return (
    <div>
                <Link to='/'><div className=" w-fit mt-10 ml-10 bg-primary text-xl font-extrabold py-1 px-3 rounded-xl">BACK</div></Link>

        <div className="flex flex-col justify-center items-center mt-20">

       

<div className="w-full mt-2 flex items-center justify-center">
        <h1 className="uppercase font-extrabold tracking-widest text-primary bg-black w-fit px-3 py-1 rounded-xl text-xl">
          Individual Attendance summary
        </h1>
      </div>
      

        <div className="mt-20">
            <table>
        
                <tr>
                    <td className="text-start bg-gray-800 border-collapse border-[1px] border-white py-2 text-white font-extrabold tracking-widest px-10">Reg No</td>
                    <td className="text-center bg-gray-800 border-collapse border-[1px] border-white py-2 text-white px-10">EG/2019/3557</td>
                </tr>

                <tr>
                    <td className="text-start bg-gray-800 border-collapse border-[1px] border-white py-2 text-white font-extrabold tracking-widest px-10">Total Number of lecture hours</td>
                    <td className="text-center bg-gray-800 border-collapse border-[1px] border-white py-2 text-white px-10">20</td>
                </tr>

                <tr>
                    <td className="text-start bg-gray-800 border-collapse border-[1px] border-white py-2 text-white font-extrabold tracking-widest px-10">Number of participated lecture hours</td>
                    <td className="text-center bg-gray-800 border-collapse border-[1px] border-white py-2 text-white px-10">15</td>
                </tr>

                <tr>
                    <td className="text-start bg-gray-800 border-collapse border-[1px] border-white py-2 text-white font-extrabold tracking-widest px-10">Number of absent lecture hours</td>
                    <td className="text-center bg-gray-800 border-collapse border-[1px] border-white py-2 text-white px-10">5</td>
                </tr>

                <tr>
                    <td className="text-start bg-gray-800 border-collapse border-[1px] border-white py-2 text-white font-extrabold tracking-widest px-10">Percentage</td>
                    <td className="text-center bg-gray-800 border-collapse border-[1px] border-white py-2 text-white px-10">60.00%</td>
                </tr>
            
        </table>
        </div>
      
    </div>
    </div>
    
  )
}

export default IndividualAttendance
