import React, { use } from "react";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import { Outlet, useNavigation } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { Toaster } from "react-hot-toast";

const Root = () => {
    const {loading : authLoading } = use(AuthContext)
    const navigation = useNavigation();
  return (
    <div>
      <Navbar></Navbar>
      <main>
        {authLoading  || navigation.state === "loading" ? (
          <div className="flex justify-center items-center h-full min-h-screen">
            <div className="w-16 h-16 border-4 border-t-[#7a9352] border-gray-200 rounded-full animate-spin"></div>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Root;
