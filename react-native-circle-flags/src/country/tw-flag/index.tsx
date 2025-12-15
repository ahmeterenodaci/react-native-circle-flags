import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TwFlagSource = require('./tw.webp');

export default function TwFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={TwFlagSource} />;
}
