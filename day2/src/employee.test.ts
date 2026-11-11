
import { describe, it } from "node:test";
import assert from "node:assert/strict";

import {
    Employee,
    getEmployeeNames,
    filterEmployeesByDepartment,
    countEmployees
} from "./employee";

// Sample employee data for testing
const employees: Employee[] = [
    {
        id: 1,
        name: "Arjun",
        department: "Engineering",
        email: "arjun@example.com"
    },
    {
        id: 2,
        name: "Rahul",
        department: "HR",
        email: "rahul@example.com"
    },
    {
        id: 3,
        name: "Priya",
        department: "Engineering",
        email: "priya@example.com"
    }
];

describe("Employee Utility Tests", () => {

    // Test 1: Get employee names
    it("should return all employee names", () => {
        const result = getEmployeeNames(employees);

        assert.deepEqual(result, [
            "Arjun",
            "Rahul",
            "Priya"
        ]);
    });

    // Test 2: Filter employees by department
    it("should filter employees by department", () => {
        const result = filterEmployeesByDepartment(
            employees,
            "Engineering"
        );

        assert.equal(result.length, 2);
        assert.equal(result[0].name, "Arjun");
        assert.equal(result[1].name, "Priya");
    });

    // Test 3: Count employees
    it("should return the total employee count", () => {
        const result = countEmployees(employees);

        assert.equal(result, 3);
    });

    // Test 4: Handle an empty employee array
    it("should return zero when there are no employees", () => {
        const result = countEmployees([]);

        assert.equal(result, 0);
    });

    // Test 5: Handle a department with no employees
    it("should return an empty array for an unmatched department", () => {
        const result = filterEmployeesByDepartment(
            employees,
            "Finance"
        );

        assert.deepEqual(result, []);
    });

});
