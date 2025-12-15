import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const YuFlagSource = require('./yu.webp');

export default function YuFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={YuFlagSource} />;
}
