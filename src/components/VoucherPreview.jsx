import React from 'react';
import jodLogo from '../assets/jod.jpeg';

const VoucherPreview = ({ data }) => {
    return (
        <div id="voucher-preview-container" className="voucher-preview-container">
            <div className="voucher-paper">

                {/* Header Sub-section */}
                <div className="voucher-header">
                    <div className="company-info">
                        <img src={jodLogo} alt="Company Logo" className="company-logo" />
                        <div className="company-text">
                            <h1 className="company-name">{data.companyName || 'Company Name'}</h1>
                            <p className="company-address">{data.companyAddress || 'Enter company address'}</p>
                            <p className="company-contact">
                                {data.phoneNumber || 'Phone'} | {data.email || 'Email'}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="voucher-title-section">
                    <h2 className="voucher-title">PAYMENT VOUCHER</h2>
                    <div className="voucher-meta">
                        <p><strong>Voucher No:</strong> <span className="highlight-val">{data.voucherNumber || 'PV-XXXX-XXX'}</span></p>
                        <p><strong>Date:</strong> <span className="highlight-val">{data.date || 'DD/MM/YYYY'}</span></p>
                    </div>
                </div>

                {/* Main Table */}
                <div className="voucher-details">
                    <table className="voucher-table">
                        <tbody>
                            <tr>
                                <td className="table-label">Paid To</td>
                                <td>{data.paidTo || '-'}</td>
                            </tr>
                            <tr>
                                <td className="table-label">Payment Mode</td>
                                <td>{data.paymentMode || '-'}</td>
                            </tr>
                            <tr>
                                <td className="table-label">Reference No.</td>
                                <td>{data.referenceNo || '-'}</td>
                            </tr>
                            <tr>
                                <td className="table-label">Expense Category</td>
                                <td>{data.category || '-'}</td>
                            </tr>
                            <tr>
                                <td className="table-label">Account Name</td>
                                <td>{data.accountName || '-'}</td>
                            </tr>
                            <tr>
                                <td className="table-label">Amount</td>
                                <td className="amount-val">₹ {data.amount || '0'}</td>
                            </tr>
                            <tr>
                                <td className="table-label">Amount in Words</td>
                                <td>{data.amountInWords || '-'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Purpose Section */}
                <div className="voucher-purpose">
                    <div className="section-title">Payment Purpose</div>
                    <p className="purpose-text">{data.purpose || 'Enter payment purpose here.'}</p>
                </div>

                {/* Remarks */}
                <div className="voucher-remarks">
                    <p><strong>Remarks:</strong> {data.remarks || 'None'}</p>
                </div>

                {/* Signatures */}
                <div className="voucher-signatures">
                    <div className="signature-box" style={{ width: '45%' }}>
                        <div className="sig-line"></div>
                        <p className="sig-title">Authorized Signatory</p>
                        <p className="sig-name">{data.authorizedBy || 'Signature'}</p>
                    </div>
                    <div className="signature-box" style={{ width: '45%' }}>
                        <div className="sig-line"></div>
                        <p className="sig-title">Receiver's Signature</p>
                        <p className="sig-name">{data.receiverName || 'Signature'}</p>
                    </div>
                </div>

                {/* Footer */}
                <div className="voucher-footer">
                    This is a computer-generated payment voucher.
                </div>
            </div>
        </div>
    );
};

export default VoucherPreview;
