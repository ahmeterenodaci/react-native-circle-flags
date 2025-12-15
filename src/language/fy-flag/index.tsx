import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const FyFlagSource = require('./fy.webp');

export default function FyFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={FyFlagSource} />;
}
