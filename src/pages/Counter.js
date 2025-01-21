import React from "react"
import { Mobile, PC } from "../hook/Mediaquery"
import Maps from "./Navermaps"

const Counter = () => {
    return (
        <>
            <div>
                <Mobile>
                    <div className="mobile_container">
                        이건 모바일 !!
                        <Maps />
                    </div>
                </Mobile>
            </div>

            <div className="pc_container">
                <PC >
                    요건 PC !!!
                    <Maps />
                </PC>
            </div>
        </>
    )
}

export default Counter;