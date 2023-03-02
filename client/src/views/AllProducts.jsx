import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import axios from "axios"

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

        </div>
    )
}