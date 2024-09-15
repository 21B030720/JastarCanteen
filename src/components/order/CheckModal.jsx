import React from 'react';
import '../../styles/tailwind.css';
import ProductCheckList from './ProductCheckList';
import useProductStore from '@/store/useProductStore';
import MediumTitleText from '../common/MediumTitleText';
import CloseButton from '../common/CloseButton';
import PrintButton from './PrintButton';
import CheckTotal from './CheckTotal';

const CheckModal = ({ toggleModal }) => {

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
                    <MediumTitleText>Jastar</MediumTitleText>
                    <ProductCheckList />
                    <CheckTotal />
                </div>

                <div className="flex justify-between mt-6 no-print">
                    <CloseButton closeModal={toggleModal} />
                    <PrintButton />
                </div>
            </div>
        </div>
    );

}

export default CheckModal;
