import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EtAmFlagSource = require('./et-am.webp');

export default function EtAmFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EtAmFlagSource} />;
}
