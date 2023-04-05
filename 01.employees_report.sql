SELECT * FROM classicmodels.employees 
WHERE reportsTo = (
  SELECT employeeNumber 
  FROM classicmodels.employees 
  WHERE firstName = 'Anthony' AND lastName = 'Bow'
);
