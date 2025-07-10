import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../Pages/Home";
const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;