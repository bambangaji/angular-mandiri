export class Employee {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date | null;
  basicSalary: number | null;
  status: string;
  group: string | null;
  description: string | null;
  gender: string;
  [key: string]: string | number | Date | null;
  constructor(data: any = {}) {
    // Assign default values or fallback values as needed

    this.id =  data.id || 0;
    this.username = data.username || '';
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.email = data.email || '';
    this.birthDate = data.birthDate || null;
    this.basicSalary = data.basicSalary || null;
    this.status = data.status || '';
    this.group = data.group || '';
    this.description = data.description || '';
    this.gender = data.gender || 'Female'
  }
}
