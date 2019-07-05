export class Personal {
    constructor(){
        this.title= null;
        this.name = {
            surname: null,
            firstname: null
        }
        this.dob= null;
        this.gender= null;
        this.maritalStatus= null
        this.identification= null;
        this.idnumber = null;
        this.nationality= null;
        this.tin= null;
        this.contact= {
            mobile: null,
            email: null,
            postal: null,
            digitalAddress: null,
            street: null,
            suburb: null,
            town: null, 
            region: null
        }
    }
}
export class Employment {
    constructor(){
        this.employer = null;
        this.employeeNumber = null
        this.employmentDate = null;
        this.monthlyEarnings = null;
        this.frequency = null;
        this.payday = null;
        this.jobtitle = null;
        this.occupation = null;
    }
}