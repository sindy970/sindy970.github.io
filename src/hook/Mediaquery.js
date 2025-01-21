import React from "react"
import { useMediaQuery } from "react-responsive"

const Mobile :React.FC = ({children}) => {
    const isMobile = useMediaQuery({
        query : "(max-width:767px)"
    });
    return <React.Fragment>{isMobile && children}</React.Fragment>
}

export default Mobile;