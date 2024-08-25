import { collection, DocumentData, getDocs } from "firebase/firestore";
import {
  useState,
  useContext,
  createContext,
  useEffect
} from "react";
import { CalendarProps } from "react-native-calendars";
import { useAuth } from "./auth";
import { db } from "../config/firebase";
import { format } from "date-fns";
import { useTheme } from "./theme";

type Props = {
  children: React.ReactNode;
}

type DotsContextType = {
  markedDates: CalendarProps["markedDates"];
  setMarkedDates: React.Dispatch<React.SetStateAction<CalendarProps["markedDates"]>>;
  getDots: () => void;
}

const DotsContext = createContext<DotsContextType>({} as DotsContextType);

export const useDots = () => {
  return useContext(DotsContext);
}

enum Dots {
  Mood = 'Mood',
  Gratitude = 'Gratitude',
}

type RawDataProps = {
  date: string;
  dots: Dots[];
}

export const DotsProvider = ({ children }: Props) => {
  const [markedDates, setMarkedDates] = useState<CalendarProps["markedDates"]>();

  const { user } = useAuth();
  const { theme } = useTheme();

  const today = format(new Date(), 'yyyy-MM-dd');

  const getDots = async () => {
    const index = user.uid;
    const docsSnap = await getDocs(collection(db, "dots", "user", index));

    const dots = docsSnap.docs.map(doc => {
      if (!doc.exists()) return;

      const data: {
        Mood?: boolean;
        Gratitude?: boolean;
      } = doc.data();

      return {
        dots: Object.keys(data).filter((key) => data[key]),
        date: doc.id
      } as DocumentData;
    });

    const rawData: RawDataProps[] = dots.map((dot) => {
      return {
        date: dot.date,
        dots: dot.dots
      }
    });

    setMarkedDates(rawData.reduce((acc, item) => {
      acc[item.date] = {
        selected: today === item.date,
        dots: item.dots.map((dot) => {
          console.log(dot);
          return {
            key: dot,
            color: theme.colors[dot.toLowerCase()],
            selectedDotColor: theme.colors.table_dot
          }
        })
      }
      return acc;
    }, {} as CalendarProps["markedDates"]));
  }

  useEffect(() => {
    getDots();

    return () => setMarkedDates({});
  }, []);

  return (
    <DotsContext.Provider value={{
      markedDates: markedDates,
      setMarkedDates: setMarkedDates,
      getDots: getDots
    }}>
      {children}
    </DotsContext.Provider>
  );
}