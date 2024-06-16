import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
    return (
        <div className="bg-gray-100 h-screen">
            <div className="bg-white p-6 md:mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                        Оплата произведена!
                    </h3>
                    <p className="text-gray-600 my-2">
                        Благодарим вас за совершение вашего безопасного онлайн-платежа.
                    </p>
                    <p>
                        Хорошего вам дня!
                    </p>
                    <div className="py-10 text-center">
                        <Link to="/home" className="px-12 bg-buttonBgColor text-white font-semibold py-3">Вернуться на главную страницу</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSuccess;