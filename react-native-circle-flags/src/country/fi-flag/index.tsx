import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const FiFlagSource = require('./fi.webp');

export default function FiFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={FiFlagSource} />;
}
