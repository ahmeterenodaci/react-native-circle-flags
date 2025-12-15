import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GhFlagSource = require('./gh.webp');

export default function GhFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={GhFlagSource} />;
}
