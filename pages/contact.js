import Link from "next/link";
import React from "react";
const Contact = () => {
    return (
        <div>
            <h2>Contact Us</h2>

            <main>
                <div>
                    Please Contact us on <Link href="mailto:test@email.com">Test</Link>
                </div>
            </main>
        </div>
    )
}

export default Contact