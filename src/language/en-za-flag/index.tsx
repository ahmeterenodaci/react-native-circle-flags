import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EnZaFlagSource = require('./en-za.webp');

export default function EnZaFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EnZaFlagSource} />;
}
