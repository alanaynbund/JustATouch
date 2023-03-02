import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import axios from "axios"
import NavBar from "./Navbar";

const AllProducts = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data);
            }).catch(err => {
                console.log(err);
            })
    },[])

    return (
        <div>
            <NavBar/>
            <div className="d-flex justify-content-between">
                <h1>All Products:</h1>
                <Link to={"/newproduct"}>
                    <button className="btn btn-success">Add a Product</button>
                </Link>

            </div>
        </div>
    )
}

export default AllProducts;