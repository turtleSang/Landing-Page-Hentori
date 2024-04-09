import { Allerta_Stencil, Montserrat } from "next/font/google"

const fontlogo = Allerta_Stencil({
    weight: ["400"],
    subsets: ["latin"]
})
const fontNormal = Montserrat({
    subsets: ["vietnamese"]
})

export { fontNormal }
export { fontlogo }