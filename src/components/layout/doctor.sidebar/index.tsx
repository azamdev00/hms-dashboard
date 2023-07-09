import useCookie from "@/hooks/use.cookie";
import { Sidebar } from "flowbite-react";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { HiChartPie } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

const DoctorSidebar: FC = function () {
  const [currentPage, setCurrentPage] = useState("");
  const [, setJwt] = useCookie("polyclinic");

  useEffect(() => {
    const newPage = window.location.pathname;

    setCurrentPage(newPage);
  }, [setCurrentPage]);

  const handleLogout = () => {
    setJwt("logged_out");
  };

  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <div className="flex h-full flex-col justify-between py-2">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="/doctor/dashboard"
              icon={HiChartPie}
              className={
                "/doctor/dashboard" === currentPage ? "bg-gray-100" : ""
              }
            >
              Dashboard
            </Sidebar.Item>

            <Sidebar.Item
              href="/doctor/patients"
              icon={HiChartPie}
              className={
                "/doctor/patients" === currentPage ? "bg-gray-100" : ""
              }
            >
              Patients
            </Sidebar.Item>

            <Sidebar.Item
              href="/doctor/profile"
              icon={CgProfile}
              className={"/doctor/profile" === currentPage ? "bg-gray-100" : ""}
            >
              Profile
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="/login"
              className={"bg-gray-400"}
              onClick={handleLogout}
            >
              Logout
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </div>
    </Sidebar>
  );
};

export default DoctorSidebar;
