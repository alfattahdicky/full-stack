SELECT nik FROM persons WHERE nik = 317505012321112;

DESCRIBE persons;

DROP TABLE persons;

INSERT INTO persons
  (nik, name)
SELECT persons.id,
       persons.name
  FROM TABLE_1 t1
 WHERE NOT EXISTS(SELECT id FROM TABLE_2 t2 WHERE t2.id = t1.id)