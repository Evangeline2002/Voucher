export const loadVoucherNumber = () => {
    let count = localStorage.getItem('voucher_counter');
    if (!count) {
        count = 1;
        localStorage.setItem('voucher_counter', count);
    }
    return `PV-${new Date().getFullYear()}-${String(count).padStart(3, '0')}`;
};

export const incrementVoucherNumber = () => {
    let count = parseInt(localStorage.getItem('voucher_counter') || '1', 10);
    count += 1;
    localStorage.setItem('voucher_counter', count);
    return loadVoucherNumber();
};

export const saveVoucherDraft = (data) => {
    localStorage.setItem('voucher_draft', JSON.stringify(data));
};

export const loadVoucherDraft = () => {
    const data = localStorage.getItem('voucher_draft');
    return data ? JSON.parse(data) : null;
};

export const clearVoucherDraft = () => {
    localStorage.removeItem('voucher_draft');
};
