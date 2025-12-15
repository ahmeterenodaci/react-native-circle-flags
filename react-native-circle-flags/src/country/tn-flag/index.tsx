import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TnFlagSource = require('./tn.webp');

export default function TnFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={TnFlagSource} />;
}
