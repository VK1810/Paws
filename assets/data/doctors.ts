export interface Doctor {
    id: string;
    name: string;
    phone: string;
    specialty: string;
    distanceKm: number;
  }
  
  export const doctors = [
    { id: '1', name: 'Dr. Steve Young', phone: '+1-555-2345', specialty: 'Radiology', distanceKm: 23 },
    { id: '2', name: 'Dr. Zach Wilson', phone: '+1-555-6789', specialty: 'Oncology', distanceKm: 12 },
    { id: '3', name: 'Dr. Grace Allen', phone: '+1-555-1234', specialty: 'Cardiology', distanceKm: 5 },
    { id: '4', name: 'Dr. Mona Lopez', phone: '+1-555-3456', specialty: 'Neurology', distanceKm: 30 },
    { id: '5', name: 'Dr. Hector Davis', phone: '+1-555-4567', specialty: 'Surgery', distanceKm: 7 },
    { id: '6', name: 'Dr. Ivy Wright', phone: '+1-555-7890', specialty: 'Dermatology', distanceKm: 20 },
    { id: '7', name: 'Dr. Bob Clark', phone: '+1-555-9012', specialty: 'Gastroenterology', distanceKm: 16 },
    { id: '8', name: 'Dr. Yvonne Hill', phone: '+1-555-5678', specialty: 'Nutrition', distanceKm: 3 },
    { id: '9', name: 'Dr. Frank Smith', phone: '+1-555-4321', specialty: 'Anesthology', distanceKm: 27 },
    { id: '10', name: 'Dr. Emily Johnson', phone: '+1-555-8765', specialty: 'Theriogenology', distanceKm: 19 },
    { id: '11', name: 'Dr. Alice Brown', phone: '+1-555-3456', specialty: 'Internal Medicine', distanceKm: 25 },
    { id: '12', name: 'Dr. David Hernandez', phone: '+1-555-2345', specialty: 'Emergency & Critical Care', distanceKm: 14 },
    { id: '13', name: 'Dr. Jack Scott', phone: '+1-555-6789', specialty: 'Radiology', distanceKm: 9 },
    { id: '14', name: 'Dr. Rachel Hill', phone: '+1-555-1234', specialty: 'Ophthalmology', distanceKm: 8 },
    { id: '15', name: 'Dr. Paul King', phone: '+1-555-7890', specialty: 'Endocrinology', distanceKm: 11 },
    { id: '16', name: 'Dr. Olivia Taylor', phone: '+1-555-9012', specialty: 'Cardiology', distanceKm: 22 },
    { id: '17', name: 'Dr. Xavier Lewis', phone: '+1-555-4567', specialty: 'Oncology', distanceKm: 4 },
    { id: '18', name: 'Dr. Tracy Hall', phone: '+1-555-4321', specialty: 'Orthopedics', distanceKm: 13 },
    { id: '19', name: 'Dr. Nora Walker', phone: '+1-555-8765', specialty: 'Neurology', distanceKm: 18 },
    { id: '20', name: 'Dr. Liam Wilson', phone: '+1-555-3456', specialty: 'Gastroenterology', distanceKm: 10 },
    { id: '21', name: 'Dr. Kara Martin', phone: '+1-555-2345', specialty: 'Dermatology', distanceKm: 2 },
    { id: '22', name: 'Dr. Victor Young', phone: '+1-555-6789', specialty: 'Nutrition', distanceKm: 6 },
    { id: '23', name: 'Dr. Samantha Lopez', phone: '+1-555-1234', specialty: 'Theriogenology', distanceKm: 19 },
    { id: '24', name: 'Dr. Nathan Allen', phone: '+1-555-7890', specialty: 'Internal Medicine', distanceKm: 17 },
    { id: '25', name: 'Dr. Uma Clark', phone: '+1-555-9012', specialty: 'Emergency & Critical Care', distanceKm: 15 },
    { id: '26', name: 'Dr. Paul Brown', phone: '+1-555-4567', specialty: 'Anesthology', distanceKm: 18 },
    { id: '27', name: 'Dr. Wendy Scott', phone: '+1-555-4321', specialty: 'Radiology', distanceKm: 33 },
    { id: '28', name: 'Dr. Quincy Hill', phone: '+1-555-8765', specialty: 'Ophthalmology', distanceKm: 10 },
    { id: '29', name: 'Dr. Zoe Wright', phone: '+1-555-3456', specialty: 'Endocrinology', distanceKm: 21 },
    { id: '30', name: 'Dr. Yara Davis', phone: '+1-555-2345', specialty: 'Cardiology', distanceKm: 20 },
    { id: '31', name: 'Dr. Ben Kim', phone: '+1-555-6789', specialty: 'Oncology', distanceKm: 14 },
    { id: '32', name: 'Dr. David Brown', phone: '+1-555-1234', specialty: 'Orthopedics', distanceKm: 15 },
    { id: '33', name: 'Dr. Alice Young', phone: '+1-555-7890', specialty: 'Internal Medicine', distanceKm: 7 },
    { id: '34', name: 'Dr. Bob Wilson', phone: '+1-555-9012', specialty: 'Surgery', distanceKm: 12 },
    { id: '35', name: 'Dr. Carol Taylor', phone: '+1-555-4567', specialty: 'Nutrition', distanceKm: 16 },
    { id: '36', name: 'Dr. David King', phone: '+1-555-4321', specialty: 'Dermatology', distanceKm: 3 },
    { id: '37', name: 'Dr. Emily Smith', phone: '+1-555-8765', specialty: 'Anesthology', distanceKm: 16 },
    { id: '38', name: 'Dr. Frank Lewis', phone: '+1-555-3456', specialty: 'Emergency & Critical Care', distanceKm: 19 },
    { id: '39', name: 'Dr. Grace Lopez', phone: '+1-555-2345', specialty: 'Radiology', distanceKm: 27 },
    { id: '40', name: 'Dr. Hector Allen', phone: '+1-555-6789', specialty: 'Ophthalmology', distanceKm: 14 },
    { id: '41', name: 'Dr. Ivy Hernandez', phone: '+1-555-1234', specialty: 'Endocrinology', distanceKm: 9 },
    { id: '42', name: 'Dr. Jack Martinez', phone: '+1-555-7890', specialty: 'Cardiology', distanceKm: 5 },
    { id: '43', name: 'Dr. Kara Wilson', phone: '+1-555-9012', specialty: 'Oncology', distanceKm: 12 },
    { id: '44', name: 'Dr. Liam Hall', phone: '+1-555-4567', specialty: 'Orthopedics', distanceKm: 22 },
    { id: '45', name: 'Dr. Mona Brown', phone: '+1-555-4321', specialty: 'Internal Medicine', distanceKm: 8 },
    { id: '46', name: 'Dr. Nathan King', phone: '+1-555-8765', specialty: 'Surgery', distanceKm: 18 },
    { id: '47', name: 'Dr. Olivia Scott', phone: '+1-555-3456', specialty: 'Nutrition', distanceKm: 18 },
    { id: '48', name: 'Dr. Paul Wright', phone: '+1-555-2345', specialty: 'Dermatology', distanceKm: 4 },
    { id: '49', name: 'Dr. Quincy Martinez', phone: '+1-555-6789', specialty: 'Anesthology', distanceKm: 21 },
    { id: '50', name: 'Dr. Rachel Lee', phone: '+1-555-1234', specialty: 'Emergency & Critical Care', distanceKm: 20 },
  ];
  