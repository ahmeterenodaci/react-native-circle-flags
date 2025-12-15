import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TrFlagSource = require('./tr.webp');

export default function TrFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={TrFlagSource} />;
}
