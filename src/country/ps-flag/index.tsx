import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const PsFlagSource = require('./ps.webp');

export default function PsFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={PsFlagSource} />;
}
