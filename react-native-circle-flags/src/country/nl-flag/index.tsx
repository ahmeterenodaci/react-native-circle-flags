import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const NlFlagSource = require('./nl.webp');

export default function NlFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={NlFlagSource} />;
}
