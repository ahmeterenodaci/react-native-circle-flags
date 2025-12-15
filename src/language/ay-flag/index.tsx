import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AyFlagSource = require('./ay.webp');

export default function AyFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={AyFlagSource} />;
}
