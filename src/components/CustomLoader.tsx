import React from "react";
import { TailSpin } from "react-loader-spinner";

interface Props {
    loaderProps: {
        color: string,
        height: string,
        width: string,
    };
};

const CustomLoader = ({ loaderProps }: Props) => (
    <div style={{
        width: "100%", justifyContent: "center", display: "flex"
    }}>
        <TailSpin
            visible={true}
            height={loaderProps.height}
            width={loaderProps.width}
            color={loaderProps.color}
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </div>
);

CustomLoader.defaultProps = {
    loaderProps: {
        color: "#ca2f00",
        height: "30",
        width: "30",
    }
};

export default CustomLoader;