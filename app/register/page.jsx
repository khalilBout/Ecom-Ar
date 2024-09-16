import React from "react";
// import Register from "../components/Register/Register";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/?callbackUrl=/login");
  }
  return (
    <div className="screenPadding w-screen h-[84vh] bg-rose-100 flex justify-center items-center ">
      {/* <Register /> */}
      <p>Register page</p>
    </div>
  );
};

export default page;
