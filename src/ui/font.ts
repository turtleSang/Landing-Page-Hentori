import { Allerta_Stencil, Montserrat } from "next/font/google"

const fontlogo = Allerta_Stencil({ subsets: ["latin"], weight: ["400"], display: "swap" })
const fontNormal = Montserrat({
    display: "swap",
    subsets: ["vietnamese"]
})

export { fontNormal }
export { fontlogo }