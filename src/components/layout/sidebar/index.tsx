import { Sidebar, TextInput } from "flowbite-react";
import type { FC } from "react";
import { useEffect, useState } from "react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";

const LayoutSidebar: FC = function () {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const newPage = window.location.pathname;

    setCurrentPage(newPage);
  }, [setCurrentPage]);

  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <div className="flex h-full flex-col justify-between py-2">
        <div>
          <form className="pb-3 md:hidden">
            <TextInput
              icon={HiSearch}
              type="search"
              placeholder="Search"
              required
              size={32}
            />
          </form>
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
                className={
                  "/admin/doctors" === currentPage ? "bg-gray-100" : ""
                }
              >
                Doctors
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/" icon={HiClipboard}>
                Docs
              </Sidebar.Item>
              <Sidebar.Item href="/" icon={HiCollection}>
                Components
              </Sidebar.Item>
              <Sidebar.Item href="/" icon={HiInformationCircle}>
                Help
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </div>
    </Sidebar>
  );
};

export default LayoutSidebar;
