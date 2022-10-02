import * as React from "react"
import {container} from "./styles/layout.module.css"


const Layout =({children})=>{
    return(
        <div>
            <main className={container}>
                {children}
            </main>
        </div>
    )
}

export default Layout