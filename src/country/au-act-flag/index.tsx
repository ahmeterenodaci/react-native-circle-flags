import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AuActFlagSource = require('./au-act.webp');

export default function AuActFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={AuActFlagSource} />;
}
