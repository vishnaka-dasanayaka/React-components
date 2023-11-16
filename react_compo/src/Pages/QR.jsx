import QRCode from "react-qr-code";
import Timer from "../components/Timer";
import { Link } from "react-router-dom";

function QR() {
  const randomString = (length = 50, lowercase = true) => {
    var result = "";
    const characters = lowercase
      ? "abcdefghijklmnopqrstuvwxyz0123456789"
      : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  return (
    <div>

        <Link to='/'><div className=" fixed mt-10 ml-10 bg-primary text-xl font-extrabold py-1 px-3 rounded-xl">HOME</div></Link>

      <div className="flex flex-col justify-center items-center">
        <div className="w-full mt-10 flex items-center justify-center">
          <h1 className="uppercase font-extrabold tracking-widest text-primary bg-black w-fit px-3 py-1 rounded-xl text-xl">
            QR 1
          </h1>
        </div>

        <div>
          <center className="mt-32">
            <QRCode className="scale-[1.8]" title="" value={randomString()} />
          </center>
        </div>

        <div className="mt-32">
          <Timer />
        </div>
      </div>
    </div>
  );
}

export default QR;
