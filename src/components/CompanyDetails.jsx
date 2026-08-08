import React from 'react';

const CompanyDetails = ({ data, onChange }) => {
    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onChange({ ...data, logo: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <fieldset className="form-section">
            <legend>Company Details</legend>
            <div className="form-group row">
                <div className="field full-width">
                    <label>Company Name</label>
                    <input type="text" placeholder="e.g. Acme Corp" value={data.companyName} onChange={e => onChange({ ...data, companyName: e.target.value })} />
                </div>
            </div>
            <div className="form-group row">
                <div className="field">
                    <label>Company Address</label>
                    <input type="text" placeholder="123 Main St..." value={data.companyAddress} onChange={e => onChange({ ...data, companyAddress: e.target.value })} />
                </div>
            </div>
            <div className="form-group row">
                <div className="field">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91 9999999999" value={data.phoneNumber} onChange={e => onChange({ ...data, phoneNumber: e.target.value })} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" placeholder="billing@acme.com" value={data.email} onChange={e => onChange({ ...data, email: e.target.value })} />
                </div>
            </div>
        </fieldset>
    );
};

export default CompanyDetails;
