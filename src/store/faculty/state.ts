export interface IFacultyInfo {
  fname: string;
  mname: string;
  lname: string;
  dateCreated: string;
  lastLogin: string;
  username: string;
  password: string;
  department:
    | 'Computer Studies Department, CIT'
    | 'Accountancy'
    | 'Education'
    | 'Nursing'
    | 'Public Administration';
  type: 'Faculty' | 'Chairperson' | 'Employee';
}

export interface FacultyStateInterface {
  facultys: IFacultyInfo[];
  activeFaculty?: IFacultyInfo;
}

function state(): FacultyStateInterface {
  return {
    facultys: [
      {
        fname: 'Hanamichi ',
        mname: 'Abdulrahim ',
        lname: 'Sakuragi',
        dateCreated: '12 / 02 / 2003',
        type: 'Chairperson',
        department: 'Nursing',
        lastLogin: '06 / 29 / 2021',
        username: 'faculty01',
        password: '10012',
      },
      {
        fname: 'Akira ',
        mname: 'Asucro ',
        lname: 'Sendoh',
        dateCreated: '01 / 9 / 2005',
        type: 'Faculty',
        department: 'Computer Studies Department, CIT',
        lastLogin: '06 / 19 / 2021',
        username: 'faculty02',
        password: '56789',
      },
      {
        fname: 'Hisashi ',
        mname: 'Ali ',
        lname: 'Mitsui',
        dateCreated: '01 / 9 / 2005',
        type: 'Employee',
        department: 'Computer Studies Department, CIT',
        lastLogin: '06 / 20 / 2021',
        username: 'faculty03',
        password: '756453',
      },
    ],
  };
}

export default state;
