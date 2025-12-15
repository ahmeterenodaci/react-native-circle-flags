import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const NrFlagSource = require('./nr.webp');

export default function NrFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={NrFlagSource} />;
}
