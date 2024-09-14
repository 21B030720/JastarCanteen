import LoadExcelButton from '@/components/update/LoadExcelButton';
import LoadList from '@/components/update/LoadList';
import SaveExcelButton from '@/components/update/SaveExcelButton';
import useExcelWork from '@/hooks/useExcelWork';
import useProductStore from '@/store/useProductStore';
import Link from 'next/link';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const UpdatePage = () => {

    

  return (
    <div>
      
      <Link href="/" >
      <button>Назад</button>
      </Link>

      <LoadExcelButton />

      <LoadList />

      <SaveExcelButton />

    </div>
  );
};

export default UpdatePage;
