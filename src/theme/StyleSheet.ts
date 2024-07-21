import { Breakpoints } from "@displaykit/responsive_styles";

// Generics
type ResponsiveProperty<T> = Partial<Record<Breakpoints, T>>;

export interface StyleSheet {
  fontFamily?: ResponsiveProperty<string> | string;
  backgroundColor?: ResponsiveProperty<string> | string;
}
