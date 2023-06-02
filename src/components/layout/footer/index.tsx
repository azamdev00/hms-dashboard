import { Footer } from "flowbite-react";
import { MdFacebook } from "react-icons/md";
import { FaDribbble, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FC } from "react";

const MainContentFooter: FC = () => {
  return (
    <>
      <Footer container>
        <div className="flex w-full flex-col gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
          <Footer.LinkGroup>
            <Footer.Link href="#" className="mr-3 mb-3 lg:mb-0">
              Terms and conditions
            </Footer.Link>
            <Footer.Link href="#" className="mr-3 mb-3 lg:mb-0">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#" className="mr-3">
              Licensing
            </Footer.Link>
            <Footer.Link href="#" className="mr-3">
              Cookie Policy
            </Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
          <Footer.LinkGroup>
            <div className="flex gap-x-1">
              <Footer.Link href="#" className="hover:[&>*]:text-black">
                <MdFacebook className="text-lg" />
              </Footer.Link>
              <Footer.Link href="#" className="hover:[&>*]:text-black">
                <FaInstagram className="text-lg" />
              </Footer.Link>
              <Footer.Link href="#" className="hover:[&>*]:text-black">
                <FaTwitter className="text-lg" />
              </Footer.Link>
              <Footer.Link href="#" className="hover:[&>*]:text-black">
                <FaGithub className="text-lg" />
              </Footer.Link>
              <Footer.Link href="#" className="hover:[&>*]:text-black">
                <FaDribbble className="text-lg" />
              </Footer.Link>
            </div>
          </Footer.LinkGroup>
        </div>
      </Footer>
      <p className="my-8 text-center text-sm text-gray-500">
        &copy; 2019-2022 Flowbite.com. All rights reserved.
      </p>
    </>
  );
};

export default MainContentFooter;
