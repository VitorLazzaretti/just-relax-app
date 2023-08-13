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
  id: string;
  title: string;
  listening: string;
  image: ImageSourcePropType;
  duration: number;
  author?: string;
}