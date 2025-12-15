import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GuFlagSource = require('./gu.webp');

export default function GuFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={GuFlagSource} />;
}
