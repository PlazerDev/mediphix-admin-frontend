interface SampleMedicalCenterApplicationRecord {
  id: string;
  name: string;
  date: string;
  time: string;
}

interface SampleDetailedMedicalCenterApplication {
  id: string;
  name: string;
  email: string;
  mobileNumber: string;
  address: string;
  district: string;
  requestedDate: string;
  requestedTime: string;
}

export class MedicalCenterService {
  static getSampleMedicalCenterApplicationList(): SampleMedicalCenterApplicationRecord[] {
    return [
      {
        id: "1",
        name: "Nawaloka Hospital",
        date: "2024/11/11",
        time: "10:16",
      },
      {
        id: "2",
        name: "Asiri Medical Center",
        date: "2024/11/12",
        time: "09:30",
      },
      {
        id: "3",
        name: "Lanka Hospitals",
        date: "2024/11/13",
        time: "15:45",
      },
      {
        id: "4",
        name: "Durdans Hospital",
        date: "2024/11/14",
        time: "11:00",
      },
      {
        id: "5",
        name: "Hemas Hospitals",
        date: "2024/11/15",
        time: "08:15",
      },
      {
        id: "6",
        name: "Royal Hospital",
        date: "2024/11/16",
        time: "13:30",
      },
      {
        id: "7",
        name: "Navinna Medicare",
        date: "2024/11/17",
        time: "14:20",
      },
      {
        id: "8",
        name: "MediCare Center Colombo",
        date: "2024/11/18",
        time: "16:50",
      },
      {
        id: "9",
        name: "Nugegoda Medical Center",
        date: "2024/11/19",
        time: "07:10",
      },
      {
        id: "10",
        name: "Jayewardenepura Hospital",
        date: "2024/11/20",
        time: "12:40",
      },
    ];
  }
  static getSampleDoctorApplicationData(): SampleDetailedMedicalCenterApplication {
    return {
      id: "1",
      name: "Nawaloka Hospital",
      email: "info@nawaloka.lk",
      mobileNumber: "0112345678",
      address: "23, Wijerama Mawatha, Colombo 07",
      district: "Colombo",
      requestedDate: "2024/11/11",
      requestedTime: "05:23",
    };
  }
}
