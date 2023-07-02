export interface AddDoctor {
  _id: string;
  fullName: string;
  role: string;
  cnic: string;
  email: string;
  mobile: string;
  password: string;
  address: string;
  city: string;
  state: string;
  speciality: string;
  yearOfExperience: number;
}

export interface Doctor extends AddDoctor {
  rating: number;
  reviews: Review[];
}

export interface Review {
  doctorId: string;
  review: string;
  rating: number;
}
