export class PersonModel {
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
export class EmploymentModel {
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
export class TrusteeModel {
    constructor(){
        this.name = { surname: null, firstname: null };
        this.gender = null;
        this.relationship = null;
        this.dob = null;
        this.postal = null;
        this.mobile = null;
    }
}
export class BeneficiaryModel {
    constructor(){
        this.name = { surname: null, firstname: null };
        this.gender = null;
        this.relationship = null;
        this.dob = null;
        this.postal = null;
        this.mobile = null;
    }
}
export class PayerModel {
    constructor(){
        this.name = null;
        this.mobile = null;
        this.identification = null;
        this.id_number = null;
        this.paypoint = {
            employer: null,
            employee_number: null,
            deduction_date: null
        };
        this.bank_details = {
            name: null,
            bank: null,
            number: null,
            branch: null,
            deduction_date: null,
            premium: null,
            frequency: null,
            adjuster: null,
            date: null
        }
    }
}
