import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TranslingualFlagSource = require('./translingual.webp');

export default function TranslingualFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={TranslingualFlagSource} />;
}
