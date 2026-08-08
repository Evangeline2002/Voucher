import React from 'react';
import CompanyDetails from './CompanyDetails';
import PaymentDetails from './PaymentDetails';
import SignatureSection from './SignatureSection';

const PaymentVoucherForm = ({ data, onChange, onSave, onClear, onPrint, onDownloadPDF }) => {
    return (
        <div className="voucher-form-container hide-on-print">
            <h2 className="form-header">Payment Voucher Form</h2>
            <form onSubmit={e => e.preventDefault()} className="voucher-form">

                <CompanyDetails data={data} onChange={onChange} />
                <PaymentDetails data={data} onChange={onChange} />
                <SignatureSection data={data} onChange={onChange} />

                <div className="form-actions">
                    <button type="button" className="btn btn-save" onClick={onSave}>Save</button>
                    <button type="button" className="btn btn-clear" onClick={onClear}>Clear</button>
                    <button type="button" className="btn btn-print" onClick={onPrint}>Print Voucher</button>
                    <button type="button" className="btn btn-pdf" onClick={onDownloadPDF}>Download PDF</button>
                </div>
            </form>
        </div>
    );
};

export default PaymentVoucherForm;
