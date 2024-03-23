// One to many multiple cases.
const mongoose = require("mongoose");
const {Schema} = mongoose;

const MONGO_URL = "mongodb://127.0.0.1:27017/relationDemo";

main()
    .then(() => {
        console.log("connected to DB");
    }).catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});


// This schmea has the object id of the Order model, to use its data ditrectly. In the order section, you can get to know about the syntax to declare  object id.
const customerSchema = new Schema({
    name: String,
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order"
    }]
});



// Defining middleware to delete the data from database.
// customerSchema.pre("findOneAndDelete", async() => {
//     console.log("PRE MIDDLEWARE IS CALLED");
// });

// This middileware will be triggered after you have deleted a customer. So, the work like deleting the orders of the customer from the database and other stuff that you want to perform once the customer is deleted, you can perform with the help of post middleware.
customerSchema.post("findOneAndDelete", async(customer) => {
    if(customer.orders.length){
        let res = await Order.deleteMany({ _id: {$in: customer.orders}});
        console.log(res);
    }
});
// The above code didn't work. Throwing error.


const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const findCustomer = async() => {
    // populate is used when we want to see the all data of the table along with the data of teh reference table.
    let res = await Customer.find({}).populate("orders");
    console.log(res);
}

findCustomer();

// const addCustomer = async() => {
//     let cust1 = new Customer({
//         name: "Rahul Kumar",
//     });

//     // Here the object id of orders table data is extracted and then the data is inserted to the customer table.
//     let order1 = await Order.findOne({item: "Chips"});
//     let order2 = await Order.findOne({item: "Chocolate"});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let res = await cust1.save();
//     console.log(res);
// }

// addCustomer();

// const addOrders = async() => {
//     let res = await Order.insertMany([
//         {item: "Samosa", price: 12},
//         {item: "Chips", price: 10},
//         {item: "Chocolate", price: 40}
//     ]);
//     console.log(res);
// }

// addOrders();


// const addCust = async() => {
//     let newCust = new Customer({
//         name: "Rishal"
//     });

//     let newOrder = new Order({
//         item: "burger",
//         price: 200,
//     });

//     newCust.orders.push(newOrder);

//     await newOrder.save();
//     await newCust.save();

//     console.log("Added new Customer!!");
// }

// addCust();

const delCust = async() => {
    let data = await Customer.findByIdAndDelete("653f78400117d4a71aad1ff4");
    console.log(data);
}

delCust();