type DefaultParams = {
  alert?: string;
  error?: string;
  success?: string;
}

export type AppRootParamList = {
  SignIn?: DefaultParams;
  SignUp?: DefaultParams;
  Home?: DefaultParams;
  Profile?: DefaultParams;
  SelectSound?: DefaultParams;
  PlaySound: DefaultParams & { meditationId: string };
  GratitudeCalendar?: DefaultParams;
  JournalDocument: DefaultParams & { date: string };
  PersonalInsights?: DefaultParams;
};

// This registers which makes navigation fully type-safe.
// https://reactnavigation.org/docs/typescript#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootParamList {}
  }
}