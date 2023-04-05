-- SELECT * FROM classicmodels.orderdetails WHERE priceEach BETWEEN 100 AND 150 ORDER BY priceEach;

SELECT p.*
FROM classicmodels.products p
JOIN classicmodels.orderdetails od ON p.productCode = od.productCode
WHERE od.priceEach BETWEEN 100 AND 150
ORDER BY od.priceEach;
