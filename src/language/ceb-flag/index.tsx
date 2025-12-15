import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CebFlagSource = require('./ceb.webp');

export default function CebFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={CebFlagSource} />;
}
