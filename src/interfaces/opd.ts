import { Department } from "./department";
import { Doctor } from "./doctor";

export interface Opd {
  _id: string;
  departmentId: String;
  doctorId: String | null;
  nextAppointment: String | null;
  currentAppointment: String | null;
  date: string;
  status: "Start" | "Idle" | "Closed" | "Stopped";
  currentToken: Number;
  lastToken: Number;
  inQueue: Number;
  expectedTimeToNext: string;
  department: Department;
  doctor: Doctor;
}

export interface AddOpdBody {
  departmentId: String;
}
