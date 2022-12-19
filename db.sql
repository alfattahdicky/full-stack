CREATE DATABASE istidata_test;

USE istidata_test;

CREATE TABLE persons(
  nik BIGINT NOT NULL PRIMARY KEY,
  nama_lengkap VARCHAR(50) NOT NULL,
  jenis_kelamin ENUM('Pria', 'Wanita') NOT NULL,
  tanggal_lahir VARCHAR(20) NOT NULL,
  alamat TEXT NOT NULL,
  negara ENUM('Argentina', 'Portugal', 'Indonesia', 'Rusia', 'Malaysia') NOT NULL
);

DROP TABLE persons;

-- GET Data
SELECT * FROM persons;
-- Create Data
INSERT INTO persons(nik, nama_lengkap, jenis_kelamin, tanggal_lahir, alamat, negara) VALUES(3175050111011001, 'Dikcy', 'Pria', '01-11-2001', 'JL. Lebak Para', 'Indonesia');

-- Update Data
UPDATE persons SET nama_lengkap = 'Dicky AL Fattah' WHERE nik = 3175050111011001;

-- Delete Data

DELETE FROM persons where nik = 3175050111011001;