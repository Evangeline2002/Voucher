import React from 'react';

const SignatureSection = ({ data, onChange }) => {
    const setField = (field, value) => {
        onChange({ ...data, [field]: value });
    };

    return (
        <fieldset className="form-section">
            <legend>Signature Details</legend>
            <div className="form-group row">
                <div className="field">
                    <label>Prepared By</label>
                    <input type="text" placeholder="Name" value={data.preparedBy} onChange={e => setField('preparedBy', e.target.value)} />
                </div>
                <div className="field">
                    <label>Checked By</label>
                    <input type="text" placeholder="Name" value={data.checkedBy} onChange={e => setField('checkedBy', e.target.value)} />
                </div>
            </div>
            <div className="form-group row">
                <div className="field">
                    <label>Approved By</label>
                    <input type="text" placeholder="Name" value={data.approvedBy} onChange={e => setField('approvedBy', e.target.value)} />
                </div>
                <div className="field">
                    <label>Receiver Name</label>
                    <input type="text" placeholder="Name" value={data.receiverName} onChange={e => setField('receiverName', e.target.value)} />
                </div>
            </div>
        </fieldset>
    );
};

export default SignatureSection;
