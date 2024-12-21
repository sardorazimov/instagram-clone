import React from "react";
import { redirect } from "next/navigation";
import DashboardForm from "./Form";
import { auth } from "@/auth";
import Stories from "@/components/shared/Store";

const page = () => {


  return (
    <main className="max-w-7xl container">
      <Stories/>
    </main>
  );
};

export default page