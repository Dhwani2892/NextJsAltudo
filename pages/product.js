import React from "react";
import styles from '../styles/Product.module.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";

// export const getStaticProps = async () => {
//     const responce = await fetch('https://fakestoreapi.com/products/');
//     const data = await responce.json();
//     return {
//         props: { productData: data }
//     }
// }
export const getServerSideProps = async () => {
    //api call
    const response = await fetch('https://fakestoreapi.com/products/');
    // console.log(response);
    const data = await response.json(); //to convert stringified json to parsed json
    // console.log(data);
    return {
        props: {productData: data}
    }
}

const Product = (props) => {
    const productData = props.productData;
    //console.log("props", productData);
    return (
        <div className="row">
            {productData.map((item, index) => {
                //console.log("item", item);
                return (
                    <div class="col-sm-3" key={index}>
                        <div className={`card ${styles.card} `}>
                            <div className={styles.imagecontainer}>
                                <img className={styles.cardimgtop} src={item.image} alt="Card image cap" />
                            </div>

                            <div class="card-body">
                            
                                <h5 className={`card-title ${styles.title}`}><Link href={`/product/${item.id}`}>{item.title}</Link></h5>
                            
                                
                                <p className="card-text"><small className="text-muted">Category: {item.category}</small></p>
                                <p className={`card-text ${styles.description}`}>{item.description}</p>
                                <p className="card-text"><small className="text-muted">Price: Rs {item.price}</small></p>
                            </div>
                        </div>
                    </div>
                );
            })}

        </div >
    )
}
export default Product
