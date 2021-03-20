import { Content } from "@felipage/react-ui";
import React from "react";
import Traffic from "../components/Traffic";
import locations from "../data/locations";

const IndexPage = () => (
    <>
        <Content>
            <div className="mt-3">
                <div className="flex flex-wrap items-start justify-center">
                    {locations.map((location) => (
                        <Traffic {...location} />
                    ))}
                </div>
            </div>
        </Content>
    </>
);

export default IndexPage;
