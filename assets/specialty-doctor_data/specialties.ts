export const specialties = [
    "Anesthology",
    "Cardiology",
    "Dermatology",
    "Emergency & Critical Care",
    "Endocrinology",
    "Gastroenterology",
    "Internal Medicine",
    "Neurology",
    "Nutrition",
    "Oncology",
    "Ophthalmology",
    "Orthopedics",
    "Radiology",
    "Surgery",
    "Theriogenology",
  ] as const;
  
  export type Specialty = typeof specialties[number];