import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ZwFlagSource = require('./zw.webp');

export default function ZwFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={ZwFlagSource} />;
}
