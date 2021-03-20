import React, { ReactNode } from "react";
import { AppBar } from "@felipage/react-ui";
import { MdTraffic } from "react-icons/md";
interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <div className="fixed inset-x-0 top-0 min-h-56 md:min-h-64 opacity-95">
                <AppBar title="Traffic Snapshots" Icon={MdTraffic} />
            </div>
            <div className="min-h-56 md:min-h-64"></div>
            {children}
            <footer className="flex justify-center py-16 mt-6 transform rotate-180 bg-white shadow-md dark:bg-black">
                <div className="transform rotate-180">
                    Images and data retrieved from{" "}
                    <a
                        href="https://data.gov.hk/en-data/dataset/hk-td-tis_2-traffic-snapshot-images"
                        className="transition-colors hover:text-feli"
                    >
                        data.gov.hk
                    </a>
                </div>
            </footer>
        </>
    );
};

export default Layout;
