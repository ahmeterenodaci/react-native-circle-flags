import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ByFlagSource = require('./by.webp');

export default function ByFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={ByFlagSource} />;
}
