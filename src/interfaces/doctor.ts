export interface Doctor {
  fullName: string;
  cnic: string;
  email: string;
  mobile: string;
  password: string;
  address: string;
  city: string;
  state: string;
  speciality: string;
  rating: number;
  yearOfExperience: number;
  reviews: Review[];
}

export interface Review {
  doctorId: string;
  review: string;
  rating: number;
}
