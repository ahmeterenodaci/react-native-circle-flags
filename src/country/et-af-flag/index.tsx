import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EtAfFlagSource = require('./et-af.webp');

export default function EtAfFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EtAfFlagSource} />;
}
