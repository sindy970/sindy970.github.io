import React from "react"
import Mobile from "../hook/Mediaquery"

const Counter = () => {
    return (
        <div>
            <Mobile>
                <div className="mobile_container" >
                    이건 모바일 !!
                </div>
            </Mobile>
        </div>
    )
}

export default Counter;