import { Sidebar } from "flowbite-react";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { HiChartPie, HiShoppingBag, HiUsers } from "react-icons/hi";

const LayoutSidebar: FC = function () {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const newPage = window.location.pathname;

    setCurrentPage(newPage);
  }, [setCurrentPage]);

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
              href="/admin/prescriptions"
              icon={HiShoppingBag}
              className={
                "/admin/prescriptions" === currentPage ? "bg-gray-100" : ""
              }
            >
              Prescriptions
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/doctors"
              icon={HiUsers}
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
              icon={HiUsers}
              className={"/admin/opds" === currentPage ? "bg-gray-100" : ""}
            >
              OPD
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </div>
    </Sidebar>
  );
};

export default LayoutSidebar;
