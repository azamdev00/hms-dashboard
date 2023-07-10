export interface Patient {
  firstName: string;
  lastName: string;
  email: string;
  cnic: string;
  password: string;
  address: string;
  city: string;
  mobile: string;
}

export interface PrescriptionFormData {
  diagnosis: Diagnose[];
  medicines: Medicine[];
  tests: Tests[];
}

export interface Diagnose {
  title: string;
}

export interface Tests {
  title: string;
}

export interface Medicine {
  name: string;
  grams: number;
  dosage: string;
  instructions: string;
}
