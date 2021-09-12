export interface Image {
  image: string
  id?: any
}

export interface noCheckedDate {
  date: number
  times: number[]
  busy?: boolean
}

export interface Time {
  date: number
  dateAndHour: number
}

export interface CheckedDate {
  date: number
  times: number[]
  busy?: boolean
}

export interface CompleteDate {
  date: Date
  times: number[]
  dayWeek: string
  month: string
  busy?: boolean
}

export interface Person {
  name: string
  surname: string
  numberPhone: string
}

export interface Appoint {
  name: string
  surname: string
  date: number
  dateAndHour: number
  service?: number
  id? : string
}


