import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TdFlagSource = require('./td.webp');

export default function TdFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={TdFlagSource} />;
}
