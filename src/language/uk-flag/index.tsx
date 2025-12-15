import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UkFlagSource = require('./uk.webp');

export default function UkFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={UkFlagSource} />;
}
