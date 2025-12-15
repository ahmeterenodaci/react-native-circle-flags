import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const PapFlagSource = require('./pap.webp');

export default function PapFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={PapFlagSource} />;
}
