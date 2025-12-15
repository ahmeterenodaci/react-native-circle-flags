import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AgFlagSource = require('./ag.webp');

export default function AgFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={AgFlagSource} />;
}
