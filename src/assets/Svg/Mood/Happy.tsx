import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { useTheme } from "../../../contexts/theme";

function Happy() {
  const { theme } = useTheme();

  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.352.463C8.189.463.762 7.891.762 17.053c0 9.163 7.427 16.59 16.59 16.59s16.59-7.427 16.59-16.59c0-9.162-7.427-16.59-16.59-16.59zM11.243 15.09c.675 0 1.222-.922 1.222-2.06 0-1.139-.547-2.06-1.222-2.06-.675 0-1.223.92-1.223 2.06 0 1.138.548 2.06 1.223 2.06zm13.444-2.06c0 1.138-.548 2.06-1.223 2.06s-1.223-.922-1.223-2.06c0-1.14.548-2.06 1.223-2.06s1.223.921 1.223 2.06zm-7.335 15.544c-5.767 0-10.516-4.352-11.148-9.951H28.5c-.632 5.599-5.38 9.95-11.148 9.95z"
        fill={theme.colors.icon}
      />
    </Svg>
  )
}

export default Happy
