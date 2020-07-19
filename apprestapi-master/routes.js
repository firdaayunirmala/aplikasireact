'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilpaket);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);
        
    app.route('/tambah')
        .post(jsonku.tambahdata);

    app.route('/ubah')
        .put(jsonku.ubahpaket);
        
    app.route('/hapus')
        .delete(jsonku.hapuspaket);

    app.route('/tampilmatakuliah')
        .get(jsonku.tampilgroupmatakuliah);
}