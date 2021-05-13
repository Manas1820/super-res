-- \c to get into the database


CREATE TABLE restaurants(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

SELECT * FROM restaurants;
SELECT * FROM restaurants WHERE id=1;

INSERT INTO restaurants(name,location,price_range) VALUES('Dominoes','Hell',34);
INSERT INTO restaurants(name,location,price_range) VALUES('Pizza Hut','Cheese',4) returning *;

UPDATE restaurants SET name='Kullu',location='Manali',price_range=3 WHERE id=2 returning *;

DELETE FROM restaurants WHERE id=1;