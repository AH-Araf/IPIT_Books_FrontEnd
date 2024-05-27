import { useState, useEffect } from 'react';
import '../AdminDashboard/ChartsForBooks/Ad.css';
import { fetchBooks, fetchUsers, fetchReviews, fetchOrders } from '../../../api/boxComponent';

const BoxComponent = () => {
    const [bookCount, setBookCount] = useState(0);
    const [userCount, setUserCount] = useState(0);
    const [reviewCount, setReviewCount] = useState(0);
    const [orderCount, setOrderCount] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalSales, setTotalSales] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const books = await fetchBooks();
            setBookCount(books.length);

            const users = await fetchUsers();
            setUserCount(users.length);

            const reviews = await fetchReviews();
            console.log('Fetched reviews in component:', reviews);  // Add this line to log reviews in the component
            setReviewCount(reviews.length);

            const orders = await fetchOrders();
            setOrderCount(orders.length);

            let totalQuantity = 0;
            let totalSales = 0;

            orders.forEach(order => {
                order.orders.forEach(item => {
                    totalQuantity += item.quantity;
                    totalSales += item.price * item.quantity;
                });
            });

            setTotalQuantity(totalQuantity);
            setTotalSales(totalSales);
        };

        fetchData();
    }, []);

    return (
        <section data-aos="fade-down" data-aos-duration="2000" className="box-comp mb-20 mt-10">
            <div className="w-80 h-40 bg-slate-800 d rounded-xl flex flex-col items-center justify-center text-white">
                <span>Total Books: <span className='font-bold text-orange-500'>{bookCount}</span></span>
                <span>Total Users: <span className='font-bold text-orange-500'>{userCount}</span></span>
                <span> Total Reviews: <span className='font-bold text-orange-500'>{reviewCount}</span></span>
            </div>

            <div className="w-80 h-40 flex justify-evenly items-center bg-slate-800 d rounded-xl text-white">
                <div>
                    <p className='text-blue-400'>New Books:</p>
                    <div className="radial-progress text-blue-500" style={{ "--value": 76 }} role="progressbar">76%</div>
                </div>
                <div>
                    <p className='text-yellow-500'>All Ratings:</p>
                    <div className="radial-progress text-yellow-500" style={{ "--value": 88 }} role="progressbar">88%</div>
                </div>
            </div>

            <div className="w-80 h-40 bg-slate-800 d rounded-xl gap-4 flex flex-col items-center justify-center text-white">
                <span><span>Books</span> <progress className="progress progress-success w-56 ms-3 bg-white" value={bookCount} max="20"></progress></span>
                <span><span>Users</span> <progress className="progress progress-info w-56 ms-3 bg-white" value={userCount} max="30"></progress></span>
                <span><span>Order</span> <progress className="progress progress-error w-56 ms-3 bg-white" value={orderCount} max="20"></progress></span>
            </div>

            <div className="w-80 h-40 bg-slate-800 d rounded-xl flex flex-col items-center justify-center text-white">
                <span>Total Orders: <span className='font-bold text-orange-500'>{orderCount}</span></span>
                <span>Total Quantity: <span className='font-bold text-orange-500'>{totalQuantity}</span></span>
                <span>Total Sales: <span className='font-bold text-orange-500'>{totalSales}</span> Taka</span>
            </div>
        </section>
    );
};

export default BoxComponent;
