export type BloodType = "" | "A" | "B" | "O" | "AB";

export type ProfileFormData = {
  name: string;
  birthMonth: string;
  birthDay: string;
  bloodType: BloodType;
  mbti: string;
  bio: string;
};

export type LearningItem = {
  id: string;
  title: string;
  description: string;
};

export type WorkItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  technologies: string;
  role: string;
  url: string;
};

export type ProfileEditData = {
  profile: ProfileFormData;
  learningItems: LearningItem[];
  workItems: WorkItem[];
  imageFile: File | null;
};