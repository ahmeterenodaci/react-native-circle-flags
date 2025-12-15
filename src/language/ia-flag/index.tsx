import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const IaFlagSource = require('./ia.webp');

export default function IaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={IaFlagSource} />;
}
