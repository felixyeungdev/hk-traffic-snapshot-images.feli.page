import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
    url: string;
    description: string;
    region: string;
}

const Traffic = ({ url, description, region }: Props) => {
    const [timestamped, setTimestamped] = useState(url);
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            if (inView) {
                console.log(`refreshing ${url}`);
                setTimestamped(`${url}?${Date.now()}`);
            }
        }, Math.random() * 50000 + 5000);

        return () => clearInterval(interval);
    }, [url, inView]);

    return (
        <div className="flex flex-col p-2 pb-6 w-80" ref={ref}>
            <img
                src={timestamped}
                alt={description}
                className="w-full rounded-md"
            />
            <div className="flex flex-col py-2">
                <span className="font-semibold line-clamp-1">{region}</span>
                <span className="text-xs line-clamp-2">{description}</span>
            </div>
        </div>
    );
};

export default Traffic;
