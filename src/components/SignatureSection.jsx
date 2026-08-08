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
                    <label>Authorized By</label>
                    <input type="text" placeholder="Name" value={data.authorizedBy || ''} onChange={e => setField('authorizedBy', e.target.value)} />
                </div>
                <div className="field">
                    <label>Receiver Signature</label>
                    <input type="text" placeholder="Name" value={data.receiverName || ''} onChange={e => setField('receiverName', e.target.value)} />
                </div>
            </div>
        </fieldset>
    );
};

export default SignatureSection;
