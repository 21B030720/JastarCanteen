import React from 'react';
import ProductCheckList from './ProductCheckList';
import useProductStore from '@/store/useProductStore';

const CheckModal = ({ toggleModal }) => {
    const { total } = useProductStore();

    const handlePrint = () => {
        window.print(); // This will trigger the print dialog
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <style jsx global>{`
                @media print {
                    body * {
                        visibility: hidden;
                    }
                    .print-content, .print-content * {
                        visibility: visible;
                    }
                    .print-content {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        padding: 20px;
                        border: 1px solid black;
                        background: #fff;
                    }
                }
            `}</style>

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <div className="print-content">
                    <p className='mb-7 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
                        Jastar
                    </p>

                    <ProductCheckList />

                    <div className="flex justify-between mt-6 border-t pt-4">
                        <p className="text-lg font-semibold">Итого:</p>
                        <p className="text-lg font-semibold">{total}тг</p>
                    </div>
                </div>

                <div className="flex justify-between mt-6 no-print">
                    <button
                        onClick={toggleModal}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                        Закрыть
                    </button>
                    <button
                        onClick={handlePrint}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg"
                    >
                        Печать
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CheckModal;
