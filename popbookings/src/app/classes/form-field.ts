export class FormField {
    value: any;
    valid: boolean;
    error: string;
  
    constructor() {
      this.value = "";
      this.valid = true;
      this.error = "";
    }
  
    validate(rule: any) {
      this.valid = true;
      this.error = "";
      if(!this.value) {
        this.valid = false;
        this.error = "This is a required field.";
        return this.valid;
      }
      if(!rule) return this.valid;
      if(rule.type == "email" && !/^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/.test(this.value)) {
        this.valid = false;
        this.error = "Enter a valid email."
        return this.valid;
      }
      if(rule.type == "password" && !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(this.value)) {
        this.valid = false;
        this.error = "Enter a valid password.";
        return this.valid;
      }
      if(rule.type == "phone-number" && !/^\d{8,12}$/.test(this.value)) {
        this.valid = false;
        this.error = "Enter a valid phone number.";
        return this.valid;
      }
      if(rule.type == "month" && (this.value < 1 || this.value > 12)) {
        this.valid = false;
        this.error = "Month";
        return this.valid;
      }
      if(rule.type == "day" && (this.value < 1 || this.value > 31)) {
        this.valid = false;
        this.error = "Day";
        return this.valid;
      }
      if(rule.type == "year" && (this.value < 1900 || this.value > 2100)) {
        this.valid = false;
        this.error = "Year";
        return this.valid;
      }
      if(rule.type ==  "rate" && (this.value < 3 || this.value > 999)) {
        this.valid = false;
        this.error = "Enter in 3 to 999.";
        return this.valid;
      }
      return this.valid;
    }
  }
  