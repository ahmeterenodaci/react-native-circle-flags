import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const PwFlagSource = require('./pw.webp');

export default function PwFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={PwFlagSource} />;
}
