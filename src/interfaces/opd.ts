import { Department } from "./department";
import { Doctor } from "./doctor";

export interface Opd {
  departmentId: String;
  doctorId: String | null;
  nextAppointment: String | null;
  currentAppointment: String | null;
  date: Date;
  status: "Start" | "Idle" | "Closed" | "Stopped";
  currentToken: Number;
  lastToken: Number;
  inQueue: Number;
  expectedTimeToNext: Date;
  department: Department;
  doctor: Doctor;
}

export interface AddOpdBody {
  departmentId: String;
}
