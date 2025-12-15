import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const YoFlagSource = require('./yo.webp');

export default function YoFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={YoFlagSource} />;
}
