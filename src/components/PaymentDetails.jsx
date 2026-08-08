import React from 'react';
import { numberToWordsIndian } from '../utils/numberToWords';

const PaymentDetails = ({ data, onChange }) => {
    // Helper to change fields
    const setField = (field, value) => {
        onChange({ ...data, [field]: value });
    };

    const handleAmountChange = (e) => {
        const value = e.target.value;
        const words = value ? numberToWordsIndian(value) : '';
        onChange({ ...data, amount: value, amountInWords: words });
    };

    return (
        <fieldset className="form-section">
            <legend>Voucher & Payment Details</legend>

            <div className="form-group row">
                <div className="field">
                    <label>Voucher No.</label>
                    <input type="text" value={data.voucherNumber} onChange={e => setField('voucherNumber', e.target.value)} />
                </div>
                <div className="field">
                    <label>Date</label>
                    <input type="date" value={data.date} onChange={e => setField('date', e.target.value)} />
                </div>
            </div>

            <div className="form-group row">
                <div className="field">
                    <label>Payment Mode</label>
                    <select value={data.paymentMode} onChange={e => setField('paymentMode', e.target.value)}>
                        <option value="Cash">Cash</option>
                        <option value="UPI">UPI</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="Cheque">Cheque</option>
                    </select>
                </div>
                <div className="field">
                    <label>Reference No.</label>
                    <input type="text" placeholder="e.g. UPI ID or Cheque No" value={data.referenceNo} onChange={e => setField('referenceNo', e.target.value)} />
                </div>
            </div>

            <div className="form-group row">
                <div className="field">
                    <label>Paid To (Vendor/Employee)</label>
                    <input type="text" placeholder="Vendor Name" value={data.paidTo} onChange={e => setField('paidTo', e.target.value)} />
                </div>
                <div className="field">
                    <label>Amount (₹)</label>
                    <input type="number" placeholder="10000" value={data.amount} onChange={handleAmountChange} />
                </div>
            </div>

            <div className="form-group row">
                <div className="field full-width">
                    <label>Amount in Words</label>
                    <input type="text" value={data.amountInWords} readOnly className="readonly-input" />
                </div>
            </div>

            <div className="form-group row">
                <div className="field">
                    <label>Expense Category</label>
                    <select value={data.category} onChange={e => setField('category', e.target.value)}>
                        <option value="Office Expenses">Office Expenses</option>
                        <option value="Travel">Travel</option>
                        <option value="Salary">Salary</option>
                        <option value="Purchase">Purchase</option>
                        <option value="Maintenance">Maintenance</option>
                        <option value="Electricity">Electricity</option>
                        <option value="Internet">Internet</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="field">
                    <label>Account Name</label>
                    <input type="text" placeholder="e.g. HDFC Current" value={data.accountName} onChange={e => setField('accountName', e.target.value)} />
                </div>
            </div>

            <div className="form-group row">
                <div className="field full-width">
                    <label>Purpose / Description</label>
                    <textarea rows="3" placeholder="Description of the payment" value={data.purpose} onChange={e => setField('purpose', e.target.value)}></textarea>
                </div>
            </div>

            <div className="form-group row">
                <div className="field full-width">
                    <label>Remarks</label>
                    <input type="text" placeholder="Any additional remarks..." value={data.remarks} onChange={e => setField('remarks', e.target.value)} />
                </div>
            </div>

        </fieldset>
    );
};

export default PaymentDetails;
