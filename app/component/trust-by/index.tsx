import Image from "next/image";

export default function TrustBy() {
  return (
    <div>
      {" "}
      <div className="trust-by">
        <div className="bg-gray-300 py-8 text-[25px] ">
          <div className="text-trust-by text-center ">
            <span className="pr-10">Trust-by:</span>{" "}
            <i className="fa-brands fa-facebook pr-20 "></i>{" "}
            <i className="fa-brands fa-google pr-10"></i>
            <span className="italic pl-10 ">Netflix</span>
            <span className="italic pl-10 ">P&G</span>
            <span className="italic pl-10 font-bold">PayPal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
