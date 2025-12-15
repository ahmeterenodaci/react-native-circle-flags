import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EnCaFlagSource = require('./en-ca.webp');

export default function EnCaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EnCaFlagSource} />;
}
