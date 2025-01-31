import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

const Numbercount = () => {

    const numCount = {
        fontSize: 45,
        color: "#80BCBD",
    }
    const count = useMotionValue(0)
    // 19.03.04 ~
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, 2231, { duration: 5 })
        return () => controls.stop()
    }, [])

    return <motion.pre style={numCount}>{rounded}</motion.pre>
}

export default Numbercount;