import React from "react";
import { redirect } from "next/navigation";
import DashboardForm from "./Form";
import { auth } from "@/auth";
import Stories from "@/components/shared/Store";
import Header from "@/components/shared/Header";
import Post from "@/components/shared/Post";
import RightSidebar from "@/components/shared/rightuserbar";

const page = () => {


  return (
    <main className="max-w-7xl container">
      <Header/>
      <div className="flex justify-end">
        <RightSidebar/>
      </div>
      <Stories/>
      <Post
      />

      <div className="flex"></div>
    </main>
  );
};

export default page