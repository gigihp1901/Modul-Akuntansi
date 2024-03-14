let transaksi = [];

function tambahTransaksi() {
    const tanggal = document.getElementById('tanggal').value;
    const deskripsi = document.getElementById('deskripsi').value;
    const debit = parseFloat(document.getElementById('debit').value);
    const kredit = parseFloat(document.getElementById('kredit').value);

    const transaksiBaru = { tanggal, deskripsi, debit, kredit };
    transaksi.push(transaksiBaru);

    renderTransaksi();
}

function renderTransaksi() {
    const daftarTransaksi = document.getElementById('daftar-transaksi');
    daftarTransaksi.innerHTML = '';

    for (const t of transaksi) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${t.tanggal}</td>
            <td>${t.deskripsi}</td>
            <td>${t.debit.toFixed(2)}</td>
            <td>${t.kredit.toFixed(2)}</td>
        `;
        daftarTransaksi.appendChild(row);
    }
}