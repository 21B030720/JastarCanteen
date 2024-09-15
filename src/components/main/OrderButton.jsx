import useProductStore from '@/store/useProductStore';
import React, { useState } from 'react';
import OrderModal from '../order/OrderModal';
import LittleText from '../common/LittleText';

const OrderButton = () => {

  const { total } = useProductStore();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={total === 0 ? 'hidden' : 'block'} >
      {/* Order Button fixed at the bottom-left */}
      <div className="fixed bottom-4 right-4" >
        <button
          onClick={toggleModal}
          className="bg-orange-500 text-white px-20 py-10 rounded-lg shadow-lg"
        >
            <p 
                className='
                    leading-none tracking-tight text-white-900 dark:text-white
                    text-2xl md:text-2xl lg:text-2xl
                '
            >
                Заказать: {total}тг
            </p>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <OrderModal toggleModal={toggleModal} />
      )}
    </div>
  );

};

export default OrderButton;
