import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { fetchUserOrders } from "../../../api/orders"; // Ensure the path is correct

const MyOrdersTwo = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user?.email) {
            const fetchOrders = async () => {
                try {
                    const data = await fetchUserOrders(user.email);
                    setOrders(data);
                } catch (error) {
                    console.error('Error fetching orders:', error);
                }
            };

            fetchOrders();
        }
    }, [user?.email]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">My Orders</h1>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                orders.map(order => (
                    <div key={order._id} className="card bg-base-100 shadow-xl mb-4">
                        <div className="lg:flex items-center p-4">
                            <div className="lg:w-1/2">
                                <h2 className="card-title">Order ID: {order._id}</h2>
                                <p><strong>User:</strong> {order.user}</p>
                                <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
                                <p><strong>Total Price:</strong> ${order.totalPrice}</p>
                                <div className="">
                                    <h3 className="font-bold">Customer Information</h3>
                                    <p><strong>Name:</strong> {order.customerInfo.name}</p>
                                    <p><strong>Phone Number:</strong> {order.customerInfo.phoneNumber}</p>
                                    <p><strong>Address:</strong> {order.customerInfo.address}</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <h3 className="font-bold">Ordered Books</h3>
                                <ul className="list-disc ml-5">
                                    {order.orders.map((book, index) => (
                                        <li key={index}>
                                            <p><strong>Book Name:</strong> {book.bookName}</p>
                                            <p><strong>Quantity:</strong> {book.quantity}</p>
                                            <p><strong>Price:</strong> ${book.price}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default MyOrdersTwo;
