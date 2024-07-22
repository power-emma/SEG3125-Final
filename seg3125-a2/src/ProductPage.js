import React, { useState, useEffect, Component } from "react";
import './Home.css'
import productData from './products.json';
import ProductCard from './ProductCard';
import SiteHeader from "./SiteHeader";

let categories = ["CPU", "Intel"]
let firstLoad = true

const ProductPage = () => {
    const [items, setItems] = useState();

    const [menu, setMenu] = useState();

    const [title, setTitle] = useState("");

    let search = [
        {name: "ALL CPUs", categories: ["CPU"], index: "1"}, 
        {name: "AMD CPUs", categories: ["CPU", "AMD"], index: "1.1"}, 
        {name: "Intel CPUs", categories: ["CPU", "Intel"], index: "1.2"},
        {name: "Motherboards", categories: ["MBD"], index: "2"}, 
        {name: "AMD Motherboards", categories: ["MBD", "AMD"], index: "2.1"}, 
        {name: "Intel Motherboards", categories: ["MBD", "Intel"], index: "2.2"}, 
        {name: "Memory", categories: ["RAM"], index: "3"},
        {name: "Graphics Cards", categories: ["GPU"], index: "4"}, 
        {name: "AMD Graphics Cards", categories: ["GPU", "AMD"], index: "4.1"}, 
        {name: "NVIDIA Graphics Cards", categories: ["GPU", "NVIDIA"], index: "4.2"}, 
    ]

    const searchQuery = (searchIndex) => {
        let obj = null;
        for(let i in search) {
            
            console.log(i)
            if (search[i].index == searchIndex) {
                obj = search[i]
            }
        }
        console.log(obj);
        let cat = obj.categories
        let newTitle = obj.name

        let tempItems = []
        console.log("IN with cats " + cat)
        categories = cat
        //console.log(categories.length)
        productData.forEach((product)  => {
            //console.log(product)
            //console.log(product.name)
            //let through = sortProduct(product.categories)
            let through = sortProduct(product.categories)
            if (through) {
                tempItems.push(<ProductCard obj={product}/>)
            }
        }
        )
        
        setItems(tempItems)
        setTitle(newTitle)
        setMenu(genCategories(categories))

        console.log("END")
        console.log(categories)
        

    }

    const sortProduct = (product) => {
        let bool = true
        console.log(product)
        console.log("CATS")
        console.log(categories)
        for (let i in categories) {
            if (product.includes(categories[i])) {

            } else {
                bool = false
            }
        }

        return bool
    }



    const genCategories = (cat) => {
        let tempMenu = [];


        search.forEach((s) => {
            let add = false
            // Add sub categories if currently selected
            for (let i in cat) {
                if (s.categories.includes(cat[0])) {
                    add = true;
                }
            }

            // Top Level
            if (s.categories.length == 1) {
                add = true;
                s.colour = "#440000"
            } if (s.categories.length == 2) {
                s.colour = "#660033"
            }

            let sortcategories = s.categories
            console.log(s.categories)
            console.log(categories)
            console.log (s.name)
            console.log(add)

            let menuname = JSON.stringify(s.name)
            if (add) {
                tempMenu.push(s);
            }
            
        })
        //<h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}} onClick={() => searchQuery({menuname}, {sortcategories})}>{menuname}</h2>

        return (
            <>
                {tempMenu.map((menuitem, index) => (
                    <h2 className = "p-3" style = {{backgroundColor: menuitem.colour, color: "#FFFFFF"}} onClick={() => searchQuery(menuitem.index)}>{menuitem.name}</h2>
                ))}
            </>
        );
        
    }
    

        // Runs only on first render
        useEffect(() => {
            searchQuery("1")
          }, []);

    // if (firstLoad = true) {
    //      searchQuery("CPUs", ["CPU"])
    //      firstLoad = false
    // }

    const render = () => {
        return(
        <div>
            <div className="row">
                <div className="col-sm-3">
                <ui className = "row">{menu}</ui>
                    {/* <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}} onClick={() => searchQuery("All CPUs", ["CPU"])}>CPUs</h2>
                    <h2 className = "p-3" style = {{backgroundColor: "#880088", color: "#FFFFFF"}} onClick={() => searchQuery("AMD CPUs", ["CPU", "AMD"])}>AMD CPUs</h2>
                    <h2 className = "p-3" style = {{backgroundColor: "#660033", color: "#FFFFFF"}} onClick={() => searchQuery("Intel CPUs", ["CPU", "Intel"])}>Intel CPUs</h2>
                    <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Motherboards</h2>
                    <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Memory</h2>
                    <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Graphics Cards</h2>
                    <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Power Supplies</h2>
                    <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Cooling</h2>
                    <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Storage</h2>
                    <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Cases</h2>
                    <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Mice & Keyboards</h2>
                    <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Monitors</h2>
                    <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Headphones</h2>
                    <h2 className = "p-3" style = {{backgroundColor: "#440000", color: "#FFFFFF"}}>Accessories</h2> */}
                </div>
                <div className = "col-sm-9" >
                    <h1 style = {{fontSize : "45pt", }}>{title}</h1>
                    <ui className = "row">{items}</ui>
                </div>
            </div>
        </div>
    )
    }
    return render()
}
    
    


export default ProductPage;