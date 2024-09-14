import useProductStore from '@/store/useProductStore';
import React, { useState } from 'react';
import OrderModal from '../order/OrderModal';

const OrderButton = () => {

  const { total } = useProductStore();
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Order Button fixed at the bottom-left */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleModal}
          className="bg-blue-500 text-white px-20 py-20 rounded-lg shadow-lg"
        >
          Заказать: {total}тг
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <OrderModal toggleModal={toggleModal} />
      )}
    </>
  );

};

export default OrderButton;
