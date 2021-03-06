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

-- Rating Table

CREATE TABLE rating(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >= 1 and rating <= 5)
);


SELECT * FROM rating;
SELECT * FROM rating WHERE restaurant_id=3;
INSERT INTO rating(restaurant_id,name,review,rating) VALUES(3,'Pramanu','cool',4) returning *; 

SELECT TRUNC(AVG(rating),2) FROM rating WHERE restaurant_id=3;
SELECT COUNT(id) FROM rating WHERE restaurant_id=3;  


SELECT * FROM restaurants LEFT JOIN (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) AS average_rating FROM rating GROUP BY restaurant_id) rating ON restaurants.id = rating.restaurant_id