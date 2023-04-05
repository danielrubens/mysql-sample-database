-- SELECT customerNumber FROM classicmodels.orders WHERE MONTH(orderDate) = 8;

SELECT DISTINCT c.* 
FROM classicmodels.customers c 
INNER JOIN classicmodels.orders o ON c.customerNumber = o.customerNumber 
WHERE MONTH(o.orderDate) = 8;
