import useCookie from "@/hooks/use.cookie";
import { Sidebar } from "flowbite-react";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { FaHospitalUser } from "react-icons/fa";
import { HiChartPie, HiUsers } from "react-icons/hi";
import { TbEmergencyBed } from "react-icons/tb";

const LayoutSidebar: FC = function () {
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
              href="/"
              icon={HiChartPie}
              className={"/" === currentPage ? "bg-gray-100" : ""}
            >
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/doctors"
              icon={FaHospitalUser}
              className={"/admin/doctors" === currentPage ? "bg-gray-100" : ""}
            >
              Doctors
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/patients"
              icon={HiUsers}
              className={"/admin/patients" === currentPage ? "bg-gray-100" : ""}
            >
              Patients
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/opds"
              icon={TbEmergencyBed}
              className={"/admin/opds" === currentPage ? "bg-gray-100" : ""}
            >
              OPD
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

export default LayoutSidebar;
