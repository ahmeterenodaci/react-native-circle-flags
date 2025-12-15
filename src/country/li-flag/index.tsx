import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const LiFlagSource = require('./li.webp');

export default function LiFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={LiFlagSource} />;
}
