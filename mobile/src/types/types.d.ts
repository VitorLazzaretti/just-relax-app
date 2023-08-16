type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
  created_at: Date;
  updated_at: Date;
}

type MeditationSound = {
  id: number;
  title: string;
  listening: string;
  image: ImageSourcePropType;
  duration: number;
  author?: string;
}

enum MoodList {
  Calm = 'Calm',
  Focus = 'Focus',
  Relax = 'Relax',
  Anxious = 'Anxious',
}

type MoodOption = {
  id: number;
  name: keyof MoodList;
  image: ImageSourcePropType;
}