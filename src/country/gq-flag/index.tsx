import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GqFlagSource = require('./gq.webp');

export default function GqFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={GqFlagSource} />;
}
