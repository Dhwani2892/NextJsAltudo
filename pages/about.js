import React from "react";
import Header from '../common/header';
import Footer from '../common/footer';
import Navbar from '../common/navbar';
import styles from '../styles/About.module.scss';
import Image from "next/image";
import Head from "next/head";
const About = () => {
    return (
        <div>
            <Head>
                <title>hello</title>
            </Head>
            <main className={styles.main}>
            <h2 className={styles.main}>Hi This is about page.</h2>
            <Image src="/sample.jpg" width={400} height={200} />
            </main>

            
        </div>
    )
}
export default About