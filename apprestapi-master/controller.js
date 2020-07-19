'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res)
};


//menampilkan semua data paket
exports.tampilpaket = function (req, res) {
    connection.query('SELECT * FROM paket', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data mahasiwa berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menambahkan data paket
exports.tambahdata = function (req, res) {
    var nama = req.body.nama;
    var harga = req.body.harga;
    var gambar = req.body.gambar;

    connection.query('INSERT INTO paket (nama,harga,gambar) VALUES(?,?,?)',
        [nama, harga, gambar],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

//mengubah data berdasarkan id
exports.ubahpaket = function (req, res) {
    var id = req.body.id_paket;
    var nama = req.body.nama;
    var harga = req.body.harga;
    var gambar = req.body.gambar;

    connection.query('UPDATE paket SET nama=?, harga=?, gambar=? WHERE id_paket=?', [nama, harga, gambar, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}

//Menghapus data berdasarkan id
exports.hapuspaket = function (req, res) {
    var id = req.body.id_paket;
    connection.query('DELETE FROM paket WHERE id_paket=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data", res)
            }
        });
}

//menampilkan matakuliah group
exports.tampilgroupmatakuliah = function (req, res) {
    connection.query('SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks from krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa',
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.oknested(rows, res);
            }
        }
    )

}


