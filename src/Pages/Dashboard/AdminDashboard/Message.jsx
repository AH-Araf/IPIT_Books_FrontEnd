import { useEffect, useState } from 'react';
import Title from '../../../ReuseableComponents/Title';
import { fetchMessages } from '../../../api/contact';

const Contact = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages()
            .then(data => {
                setMessages(data);
            })
            .catch(error => {
                console.error('Error fetching messages:', error);
            });
    }, []);

    return (
        <div className="container mx-auto px-4 py-10">
            <Title a="Messages" />
            <div className="grid gap-8">
                {messages.map(message => (
                    <div key={message._id} className="bg-white e p-6 rounded-md">
                        <p className="text-lg font-semibold"><span className='font-bold'>Name:</span> {message.YourName}</p>
                        <p className="text-gray-600"><span className='font-bold'>Phone Number:</span> {message.PhoneNumber}</p>
                        <p className="text-gray-600"><span className='font-bold'>Email:</span> <span className='text-blue-500 font-bold text-sm'>{message.Email}</span></p>
                        <p className="mt-2"><span className='font-bold text-green-500'>Message: </span>{message.Message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;
