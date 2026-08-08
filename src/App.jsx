import React, { useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import PaymentVoucherForm from './components/PaymentVoucherForm';
import VoucherPreview from './components/VoucherPreview';
import { loadVoucherNumber, incrementVoucherNumber, saveVoucherDraft, loadVoucherDraft, clearVoucherDraft } from './utils/voucherHelpers';
import './App.css';

const defaultData = {
  logo: '',
  companyName: '',
  companyAddress: '',
  phoneNumber: '',
  email: '',

  voucherNumber: '',
  date: new Date().toISOString().split('T')[0],
  paymentMode: 'Cash',
  referenceNo: '',
  paidTo: '',
  amount: '',
  amountInWords: '',

  category: 'Office Expenses',
  accountName: '',
  purpose: '',
  remarks: '',

  authorizedBy: '',
  receiverName: ''
};

function App() {
  const [data, setData] = useState(defaultData);
  const [mobileTab, setMobileTab] = useState('form');

  useEffect(() => {
    const draft = loadVoucherDraft();
    if (draft) {
      setData(draft);
    } else {
      setData(prev => ({ ...prev, voucherNumber: loadVoucherNumber() }));
    }
  }, []);

  const handleChange = (newData) => {
    setData(newData);
  };

  const handleSave = () => {
    saveVoucherDraft(data);
    alert('Voucher saved successfully as draft.');
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear the form?")) {
      clearVoucherDraft();
      setData({ ...defaultData, voucherNumber: loadVoucherNumber() });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    const element = document.getElementById('voucher-preview-container');
    const opt = {
      margin: 0,
      filename: `Payment_Voucher_${data.voucherNumber || 'Draft'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="app-container">
      <header className="app-header hide-on-print">
        <h1>Payment Voucher Management</h1>
      </header>
      <main className="main-layout">
        <section className={`left-panel ${mobileTab === 'preview' ? 'mobile-hidden' : ''}`}>
          <PaymentVoucherForm
            data={data}
            onChange={handleChange}
            onSave={handleSave}
            onClear={handleClear}
            onPrint={handlePrint}
            onDownloadPDF={handleDownloadPDF}
          />
        </section>
        <section className={`right-panel ${mobileTab === 'form' ? 'mobile-hidden' : ''}`}>
          <VoucherPreview data={data} />
        </section>
      </main>

      <div className="mobile-tabs hide-on-print">
        <button className={`tab-btn ${mobileTab === 'form' ? 'active' : ''}`} onClick={() => setMobileTab('form')}>
          Edit Form
        </button>
        <button className={`tab-btn ${mobileTab === 'preview' ? 'active' : ''}`} onClick={() => setMobileTab('preview')}>
          See Preview
        </button>
      </div>
    </div>
  );
}

export default App;
