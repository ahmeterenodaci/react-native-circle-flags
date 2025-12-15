import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CheckeredFlagSource = require('./checkered.webp');

export default function CheckeredFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={CheckeredFlagSource} />;
}
