class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments[department]) {
            this.departments[department] = {
                name: '',
                averageSalary: 0,
                sumSalary: 0,
                employees: []
            }
        }
        
        this.departments[department].employees.push({name, salary, position});

        this.departments[department].name = department;
        this.departments[department].sumSalary += salary;

        let currSum = this.departments[department].sumSalary;
        let currEmployeesListCount = this.departments[department].employees.length;

        this.departments[department].averageSalary = currSum / currEmployeesListCount;

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let highestAvgSalary = 0;
        let bestDepartmentBySalary;

        for (let departsInfo of Object.entries(this.departments)) {
            let departName = departsInfo[0];
            let depart = departsInfo[1];

            if (depart.averageSalary > highestAvgSalary) {
                highestAvgSalary = depart.averageSalary;
                bestDepartmentBySalary = this.departments[departName];
            }
        }

        bestDepartmentBySalary.employees.sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name)
        });

        let resultEmplyeesList = '';

        for (let employee of bestDepartmentBySalary.employees) {
            resultEmplyeesList += `${employee.name} ${employee.salary} ${employee.position}\n`;
        }

        return `Best Department is: ${bestDepartmentBySalary.name}\nAverage salary: ${bestDepartmentBySalary.averageSalary.toFixed(2)}\n${resultEmplyeesList.trimEnd()}`;
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());