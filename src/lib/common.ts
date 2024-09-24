export interface IEvent {
    heading: string,
    type: string,
    oneliner: string,
    scheduledDate: Date,
    to: string,
    form: string, // Form Link
    description?: string,
    students: IStudent [],
    staffs: IStaff[]
};

export interface IStudent {
  name: string,
  phone: string,
}

export interface IStaff {
  name: string,
  phone: string,
}

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const months = ["JAN", "FEB", "MAR", "APR"];
export function calcDate(date: Date) {
  return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth() % 4]}`;
}
