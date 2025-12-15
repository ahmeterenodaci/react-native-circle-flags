import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const Pt20FlagSource = require('./pt-20.webp');

export default function Pt20Flag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={Pt20FlagSource} />;
}
