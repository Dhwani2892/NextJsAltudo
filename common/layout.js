import React from "react";
import Header from "./header";
import Footer from "./footer";
const Layout = (props) => {
    const { children, footerstatus } = props
    return (
        <div className="container-fluid">
            {true ? (
                <div>
                    <Header />
                    
                    {children}
                    {!footerstatus && <Footer />}

                </div>
            ) : (
                <div>
                    <Header />
                   
                    {children}
                    {!footerstatus && <Footer />}
                </div>
            )}
        </div>


    )
}
export default Layout