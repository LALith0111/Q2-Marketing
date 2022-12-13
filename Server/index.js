const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "lalith",
    database: "q2"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/api/get",(req,res)=> {
    const sqlGet = "SELECT * FROM customers";
    db.query(sqlGet,(error,result) => {
        res.send(result);
    });
});


app.post("/api/post",(req,res) => {
    const{First_name, Last_name, Phone_no, Email, Address, Password, C_Password} = req.body;
    const sqlInsert = "INSERT INTO customers (First_name,Last_name,Phone_no,Email,Address,Password,C_Password) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [First_name, Last_name, Phone_no, Email, Address, Password, C_Password], (error,result)=> {
        if(error){
            console.log(error);
        }
    });
});

app.delete("/api/remove/:cust_id",(req,res) => {
    const{ cust_id } = req.params;
    const sqlRemove = "DELETE FROM customers WHERE cust_id = ?";
    db.query(sqlRemove, cust_id, (error,result)=> {
        if(error){
            console.log(error);
        }
    });
});

app.get("/api/get/:cust_id",(req,res)=> {
    const {cust_id} = req.params;
    const sqlGet = "SELECT * FROM customers where cust_id = ?";
    db.query(sqlGet, cust_id, (error, result) => {
        if(error) {
            console.log(error);
        }
        res.send(result);
    });
});

app.put("/api/update/:cust_id",(req,res)=> {
    const {cust_id} = req.params;
    const { First_name, Last_name, Phone_no, Email, Address, Password, C_Password} = req.body;
    const sqlUpdate = "UPDATE customers SET First_name = ?, Last_name = ?, Phone_no = ?, Email = ?, Address = ?, Password = ?, C_Password = ? WHERE cust_id = ?";
    db.query(sqlUpdate, [cust_id, First_name, Last_name, Phone_no, Email, Address, Password, C_Password], (error, result) => {
        if(error) {
            console.log(error);
        }
        res.send(result);
    });
});

app.get("/api/get/:cust_id",(req,res)=> {
    const {cust_id} = req.params;
    const sqlGet = "SELECT * FROM customers WHERE cust_id=?";
    db.query(sqlGet, cust_id,(error,result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});

app.put("/api/update/:cust_id",(req,res)=> {
    const {cust_id} = req.params;
    const {First_name, Last_name, Phone_no, Email, Address, Password, C_Password} = req.body;
    const sqlUpdate= "UPDATE customers SET First_name = ?, Last_name = ?, Phone_no = ?, Email = ?, Address = ?, Password = ?, C_Password = ? WHERE cust_id=?";
    db.query(sqlUpdate,[First_name, Last_name, Phone_no, Email, Address, Password, C_Password],(error,result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});



app.get("/product/get",(req,res)=> {
    const sqlGet = "SELECT * FROM products";
    db.query(sqlGet,(error,result) => {
        res.send(result);
    });
});


app.post("/product/post",(req,res) => {
    const{product_name, product_description, product_quantity, product_price,picture, offer_price} = req.body;
    const sqlInsert = "INSERT INTO products (product_name, product_description, product_quantity, product_price, product_image, offer_price) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [product_name, product_description, product_quantity, product_price, picture.images, offer_price], (error,result)=> {
        if(error){
            console.log(error);
        }
    });
});


app.delete("/product/remove/:product_id",(req,res) => {
    const{ product_id } = req.params;
    const sqlRemove = "DELETE FROM products WHERE product_id = ?";
    db.query(sqlRemove, product_id, (error,result)=> {
        if(error){
            console.log(error);
        }
    });
});

app.get("/product/get/:product_id",(req,res)=> {
    const {product_id} = req.params;
    const sqlGet = "SELECT * FROM products where product_id = ?";
    db.query(sqlGet, product_id, (error, result) => {
        if(error) {
            console.log(error);
        }
        res.send(result);
    });
});

app.put("/product/productupdate/:product_id",(req,res)=> {
    const {product_id} = req.params;
    const { product_name, product_description, product_quantity,product_price, picture, offer_price} = req.body;
    const sqlUpdate = "UPDATE products SET product_name = ?, product_description = ?, product_quantity = ?, product_price = ?, product_image = ?, offer_price = ? WHERE product_id = ?";
    db.query(sqlUpdate, [product_name, product_description, product_quantity, product_price, picture.images, offer_price, product_id], (error, result) => {
        if(error) {
            console.log(error);
        }
        res.send(result);
    });
});




app.get("/supplier/get",(req,res)=> {
    const sqlGet = "SELECT * FROM supplier";
    db.query(sqlGet,(error,result) => {
        res.send(result);
    });
});


app.post("/supplier/post",(req,res) => {
    const{supplier_name, company_name, supplier_address, supplier_contact,supplier_email, supplier_password, supplier_cpassword} = req.body;
    const sqlInsert = "INSERT INTO supplier (supplier_name, company_name, supplier_address, supplier_contact,supplier_email, supplier_password, supplier_cpassword) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [supplier_name, company_name, supplier_address, supplier_contact,supplier_email, supplier_password, supplier_cpassword], (error,result)=> {
        if(error){
            console.log(error);
        }
    });
});


app.delete("/supplier/remove/:supplier_id",(req,res) => {
    const{ supplier_id } = req.params;
    const sqlRemove = "DELETE FROM supplier WHERE supplier_id = ?";
    db.query(sqlRemove, supplier_id, (error,result)=> {
        if(error){
            console.log(error);
        }
    });
});

app.get("/supplier/get/:supplier_id",(req,res)=> {
    const {supplier_id} = req.params;
    const sqlGet = "SELECT * FROM supplier where supplier_id = ?";
    db.query(sqlGet, supplier_id, (error, result) => {
        if(error) {
            console.log(error);
        }
        res.send(result);
    });
});

app.put("/supplier/update/:supplier_id",(req,res)=> {
    const {supplier_id} = req.params;
    const { supplier_name, company_name, supplier_address, supplier_contact,supplier_email, supplier_password, supplier_cpassword} = req.body;
    const sqlUpdate = "UPDATE supplier SET supplier_name = ?, company_name = ?, supplier_address = ?, supplier_contact = ?,supplier_email = ?, supplier_password = ?, supplier_cpassword = ? WHERE supplier_id = ?";
    db.query(sqlUpdate, [supplier_name, company_name, supplier_address, supplier_contact,supplier_email, supplier_password, supplier_cpassword, supplier_id], (error, result) => {
        if(error) {
            console.log(error);
        }
        res.send(result);
    });
});




app.get("/supplier/Report",(req,res)=>{
    const sqlGet = "SELECT * FROM supplier";
    db.query(sqlGet,(err,result)=>{
        if(err)
            console.log(err)
        console.log(result)
        res.send(result)
    } )
})


app.get("/customers/Customerreport",(req,res)=>{
    const sqlGet = "SELECT * FROM customers";
    db.query(sqlGet,(err,result)=>{
        if(err)
            console.log(err)
        console.log(result)
        res.send(result)
    } )
})

app.get("/products/Productreport",(req,res)=>{
    const sqlGet = "SELECT * FROM products";
    db.query(sqlGet,(err,result)=>{
        if(err)
            console.log(err)
        console.log(result)
        res.send(result)
    } )
})


app.listen(4000, () => {
    console.log("Server is running on port 4000");
})