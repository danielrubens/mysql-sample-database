-- SELECT customerNumber FROM classicmodels.orders WHERE YEAR(orderDate) = 2003 AND MONTH(orderDate) = 8;

SELECT DISTINCT c.* 
FROM classicmodels.customers c 
INNER JOIN classicmodels.orders o ON c.customerNumber = o.customerNumber 
WHERE YEAR(o.orderDate) = 2003 AND MONTH(o.orderDate) = 8;

