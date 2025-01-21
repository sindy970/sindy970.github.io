import React from "react"
import { Mobile, PC } from "../hook/Mediaquery"
import Maps from "./Navermaps"
import Snow from "./Snow"
// import Home from "./Home"

const Counter = () => {
    return (
        <>
            <div>
                <Mobile>
                    <div className="mobile_container">
                        이건 모바일 !!
                        <Snow />
                        <Maps media="mobile_container" />
                    </div>
                </Mobile>
            </div>

            <div className="pc_container">
                <PC >
                    요건 PC !!!
                    <Snow />
                    <Maps media="pc_container"/>
                </PC>
            </div>
        </>
    )
}

export default Counter;