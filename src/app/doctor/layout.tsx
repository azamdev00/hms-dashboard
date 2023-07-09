"use client";
import DoctorSidebar from "@/components/layout/doctor.sidebar";
import MainContentFooter from "@/components/layout/footer";
import Header from "@/components/layout/header";
import useCookie from "@/hooks/use.cookie";
import { redirect } from "next/navigation";
import type { FC, PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";

interface NavbarSidebarLayoutProps {
  isFooter?: boolean;
}

const MainContent: FC<PropsWithChildren<NavbarSidebarLayoutProps>> = ({
  children,
  isFooter,
}) => {
  return (
    <main className="relative h-full w-full overflow-y-auto bg-gray-50 lg:ml-64">
      {children}
      {isFooter && (
        <div className="mx-4 mt-4">
          <MainContentFooter />
        </div>
      )}
    </main>
  );
};

const DoctorLayout: FC<PropsWithChildren<NavbarSidebarLayoutProps>> = ({
  children,
  isFooter = true,
}) => {
  const [jwt] = useCookie("polyclinic");

  // if (!jwt || jwt === "logged_out") redirect("/login");
  return (
    <>
      <Header />
      <div className="flex items-start pt-16">
        <DoctorSidebar />
        <MainContent isFooter={isFooter}>{children}</MainContent>
      </div>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default DoctorLayout;
