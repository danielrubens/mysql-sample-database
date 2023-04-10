SELECT DISTINCT c.* 
FROM classicmodels.customers c 
INNER JOIN classicmodels.orders o ON c.customerNumber = o.customerNumber 
WHERE YEAR(o.shippedDate) = 2003 AND MONTH(o.shippedDate) = 8;
