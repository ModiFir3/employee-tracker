INSERT INTO department (id, name)
VALUES
(1,'Sales'),
(2, 'Engineering'),
(3, 'Finance');

INSERT INTO role (id, title, salary, department_id)
VALUES
(1, 'Sales person', 30000, 1),
(2, 'Sales Manager', 35000, 1),
(3, 'Software Engineer', 40000, 2),
(4, 'Software Engineer', 45000, 2),
(5, 'Accountant', 50000, 3),
(6, 'Accountant Manager', 45000, 3);

-- dont forget to add back manager_id
INSERT INTO employee (id, first_name, last_name, role_id)
VALUES
(1, 'James', 'Fraser', 1),
(2, 'Jack', 'London', 3),
(3, 'Robert', 'Bruce', 2),
(4, 'Peter', 'Greenaway', 1),
(5, 'Derek', 'Jarman', 5),
(6, 'Paolo', 'Pasolini', 6),
(7, 'Heathcote', 'Williams', 3),
(8, 'Sandy', 'Powell', 4),
(9, 'Emil', 'Zola', 5),
(10, 'Sissy', 'Coalpits', 1);

