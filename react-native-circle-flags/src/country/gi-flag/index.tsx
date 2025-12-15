import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GiFlagSource = require('./gi.webp');

export default function GiFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={GiFlagSource} />;
}
