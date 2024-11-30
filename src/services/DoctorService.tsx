interface SampleDoctorApplicationRecord {
  id: string;
  name: string;
  date: string;
  time: string;
}

interface SampleDetailedDoctorApplication {
  id: string;
  name: string;
  slmcNumber: string;
  nic: string;
  email: string;
  mobileNumber: string;
  education: string;
  specialization: string[];
  supportedAppointmentCatergories: string[];
  requestedDate: string;
  requestedTime: string;
}

export class DoctorService {
  static getSampleDoctorApplicationList(): SampleDoctorApplicationRecord[] {
    return [
      { id: "1", name: "Ruwan Kodikara", date: "2024/11/11", time: "05:23" },
      { id: "2", name: "Nuwan Perera", date: "2024/11/12", time: "09:15" },
      { id: "3", name: "Anjali Silva", date: "2024/11/13", time: "14:45" },
      { id: "4", name: "Kamal Fernando", date: "2024/11/14", time: "10:30" },
      {
        id: "5",
        name: "Sumith Wickramasinghe",
        date: "2024/11/15",
        time: "08:00",
      },
      { id: "6", name: "Ishara Gunasekara", date: "2024/11/16", time: "16:10" },
      { id: "7", name: "Priyanka Dias", date: "2024/11/17", time: "12:25" },
      { id: "8", name: "Tharindu Jayasena", date: "2024/11/18", time: "18:45" },
      { id: "9", name: "Sanjaya Wijeratne", date: "2024/11/19", time: "07:50" },
      {
        id: "10",
        name: "Chathuri Ranaweera",
        date: "2024/11/20",
        time: "11:35",
      },
    ];
  }
  static getSampleDoctorApplicationData(): SampleDetailedDoctorApplication {
    return {
      id: "1",
      name: "Dr. Ruwan Kodikara",
      slmcNumber: "SLMC12345",
      nic: "198123456789",
      email: "ruwan.kodikara@example.com",
      mobileNumber: "0771234567",
      education: "MBBS, MD - General Medicine",
      specialization: ["Cardiology", "Telemedicine"],
      supportedAppointmentCatergories: ["OPD", "Heart Health"],
      requestedDate: "2024/11/11",
      requestedTime: "05:23",
    };
  }
}
