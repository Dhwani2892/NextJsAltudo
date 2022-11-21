import Link from "next/link";
import React from "react";
import Image from "next/image";
const Head1 = () => {
    return (
       
        
        <div>
           
        
              
      
            <nav class="navbar navbar-expand-lg navbar-light bg-primary mb-4 p-2">
                <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <Link className="navbar-brand" href="/">
                <Image src="/logo.jpg" width={50} height={50} /></Link>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav col-lg-8">
                        <li class="nav-item active">                            
                            <Link className="nav-link" href="/about">About US</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" href="/product">Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" href="/contact">Contact Us</Link>
                        </li>  
                    </ul>
                    
                </div>
            </nav>


        </div>
        
    )
}
export default Head1