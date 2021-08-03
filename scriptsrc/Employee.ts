interface EmployeeConfig{
    name?: string;
    LastName?: string;
    CodeEmployee?: number;
    Age?: number;
    Salary?: number;
    Bonus?: boolean;

    }

    function createEmployee(config: EmployeeConfig): {name: string; LastName: string; CodeEmployee?: number; Age?: number; Salary?: number; Bonus?: boolean;}{
        let newEmployee = {name: "unknown", LastName: "unknown",CodeEmployee:1111,Age:0,Salary:2000,Bonus:true} // ถ้าตอนส่งไม่ได้ส่งอะไรมาก็จะใช้ตัวที่อยู่ใน นี้ <----
       
        if(config.name){
            newEmployee.name = config.name
        }
        if(config.LastName){
            newEmployee.LastName = config.LastName
        }
        if(config.CodeEmployee){
            newEmployee.CodeEmployee = config.CodeEmployee
        }
        if(config.Age){
            newEmployee.Age = config.Age
        }
        if(config.Salary){
            newEmployee.Salary = config.Salary
        }
       if(config.Bonus === true){
          newEmployee.Salary = newEmployee.Salary * 2.5
       }
        
    
    
        return newEmployee
    
    }
    
    let Employee = createEmployee({ name: "jittaphon", LastName: "่jankham", CodeEmployee: 632110336 ,Age: 19 ,Salary: 10000 ,Bonus: true }) // ส่ง param เข้าไป ใน function 
    
    console.log('Employee = ', Employee);
   