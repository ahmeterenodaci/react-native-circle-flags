import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const VoFlagSource = require('./vo.webp');

export default function VoFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={VoFlagSource} />;
}
