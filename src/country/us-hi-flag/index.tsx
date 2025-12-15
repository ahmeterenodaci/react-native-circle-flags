import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsHiFlagSource = require('./us-hi.webp');

export default function UsHiFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={UsHiFlagSource} />;
}
