import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EtSnFlagSource = require('./et-sn.webp');

export default function EtSnFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EtSnFlagSource} />;
}
