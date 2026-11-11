
export interface Employee {
    id: number;
    name: string;
    department: string;
    email: string;
}

export interface ApiResponse {
    success: boolean;
    message: string;
    data: Employee[];
}

interface ApiUser {
    id: number;
    name: string;
    email: string;
    company: {
        name: string;
    };
}

// Fetch employee data from API
export async function fetchEmployees(): Promise<Employee[]> {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch employees");
    }

    const users: ApiUser[] = await response.json();

    const employees: Employee[] = users.map(user => ({
        id: user.id,
        name: user.name,
        department: user.company.name,
        email: user.email
    }));

    return employees;
}

// Get employee names using map()
export function getEmployeeNames(employees: Employee[]): string[] {
    return employees.map(employee => employee.name);
}

// Filter employees by department
export function filterEmployeesByDepartment(
    employees: Employee[],
    department: string
): Employee[] {
    return employees.filter(
        employee => employee.department === department
    );
}

// Count employees using reduce()
export function countEmployees(employees: Employee[]): number {
    return employees.reduce(
        (count) => count + 1,
        0
    );
}

// Handle loading, success and errors
export  async function loadEmployees(): Promise<void>  {
    console.log("Loading employees...");

    try {
        const employees = await fetchEmployees();

        console.log("Employees loaded successfully:");
        console.log(employees);

        const employeeNames = getEmployeeNames(employees);
        console.log("Employee names:", employeeNames);

        const filteredEmployees = filterEmployeesByDepartment(
            employees,
            "Romaguera-Crona"
        );
        console.log("Filtered employees:", filteredEmployees);

        const totalEmployees = countEmployees(employees);
        console.log("Total employees:", totalEmployees);

    } catch (error) {
        console.error("Error loading employees:", error);

    } finally {
        console.log("Loading completed.");
    }
}
