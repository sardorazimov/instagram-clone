import React from "react";
import { redirect } from "next/navigation";
import DashboardForm from "./Form";
import { auth } from "@/auth";
import Stories from "@/components/shared/Store";
import Header from "@/components/shared/Header";
import Post from "@/components/shared/Post";
import RightSidebar from "@/components/shared/rightuserbar";
import MobileHeader from "@/components/shared/MobileHeader";

const page = () => {


  return (
    <main className="max-w-7xl ">
      <Header/>
      <MobileHeader/>
      <div className="flex justify-end">
        <RightSidebar/>
      </div>
      <div className="sm:mt-12 lg:-mt-3 ">
        <Stories/>
      <Post
      /> 
      </div>
     
    </main>
  );
};

export default page