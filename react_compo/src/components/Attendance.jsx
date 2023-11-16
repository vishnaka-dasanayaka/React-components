import QrCode2Icon from "@mui/icons-material/QrCode2";
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';

function Attendance() {
  return (
    <div className="h-screen flex flex-col w-full">
      <div className="w-full mt-10 flex items-center justify-center">
        <h1 className="uppercase font-extrabold tracking-widest text-primary bg-black w-fit px-3 py-1 rounded-xl text-xl">
          attendance table
        </h1>
      </div>

      <div className="mt-16 ml-10">
        <table className="text-center">
          <thead className="font-extrabold text-primary tracking-widest">
            <tr className="">
                <td></td>
              <td className="w-fit px-3 border-collapse border-[1px] border-black">
                Reg NO
              </td>

              <td className="w-fit px-3 border-collapse border-[1px] border-black">
                01/01/2023
              </td>

              <td className="w-fit px-3 border-collapse border-[1px] border-black">
                02/01/2023
              </td>

              <td className="w-fit px-3 border-collapse border-[1px] border-black">
                03/01/2023
              </td>

              <td className="w-fit px-3 border-collapse border-[1px] border-black">
                Percentage
              </td>
            </tr>
          </thead>

          <tbody>
            <tr className="">
            <Link to={'/studentattendance'}><td className="pr-2"><VisibilityIcon className="scale-75"/></td></Link>
              <td className="w-fit px-3 border-collapse border-[1px] border-black">
                EG/2019/3557
                
              </td>

              <td className="w-fit px-3 text-green-600 border-collapse border-[1px] border-black">
                YES
              </td>

              <td className="w-fit px-3 text-red-600 border-collapse border-[1px] border-black">
                NO
              </td>

              <td className="w-fit px-3 text-green-600 border-collapse border-[1px] border-black">
                YES
              </td>

              <td className="w-fit px-3  border-collapse border-[1px] border-black">
                66.66 %
              </td>
            </tr>

            <tr className="">
            <Link to={'/studentattendance'}><td className="pr-2"><VisibilityIcon className="scale-75"/></td></Link>
              <td className="w-fit px-3 border-collapse border-[1px] border-black">
                EG/2019/3557
              </td>

              <td className="w-fit px-3 text-green-600 border-collapse border-[1px] border-black">
                YES
              </td>

              <td className="w-fit px-3 text-green-600 border-collapse border-[1px] border-black">
                YES
              </td>

              <td className="w-fit px-3 text-green-600 border-collapse border-[1px] border-black">
                YES
              </td>

              <td className="w-fit px-3  border-collapse border-[1px] border-black">
                100.00%
              </td>
            </tr>

            <tr className="">
            <Link to={'/studentattendance'}><td className="pr-2"><VisibilityIcon className="scale-75"/></td></Link>
              <td className="w-fit px-3 border-collapse border-[1px] border-black">
                EG/2019/3557
              </td>

              <td className="w-fit px-3 text-red-600 border-collapse border-[1px] border-black">
                NO
              </td>

              <td className="w-fit px-3 text-green-600 border-collapse border-[1px] border-black">
                YES
              </td>

              <td className="w-fit px-3 text-green-600 border-collapse border-[1px] border-black">
                YES
              </td>

              <td className="w-fit px-3 border-collapse border-[1px] border-black">
                66.66%
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-end items-end">
        <Link to={'/QR'}><div className="mr-10 mt-10 bg-primary scale-[3] hover:scale-[3.25] hover:cursor-pointer">
        <QrCode2Icon  />
        </div></Link>
        
      </div>
    </div>
  );
}

export default Attendance;
