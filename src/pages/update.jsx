import GoBackFromUpdate from '@/components/update/GoBackFromUpdate';
import LoadExcelButton from '@/components/update/LoadExcelButton';
import LoadList from '@/components/update/LoadList';
import SaveExcelButton from '@/components/update/SaveExcelButton';
import React, { useState } from 'react';

const UpdatePage = () => {

    

  return (
    <div>
        <GoBackFromUpdate />
        <LoadExcelButton />
        <LoadList />
        <SaveExcelButton />
    </div>
  );
};

export default UpdatePage;
