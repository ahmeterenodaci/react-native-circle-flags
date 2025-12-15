import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const IqFlagSource = require('./iq.webp');

export default function IqFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={IqFlagSource} />;
}
