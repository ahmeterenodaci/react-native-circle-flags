import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BqSaFlagSource = require('./bq-sa.webp');

export default function BqSaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={BqSaFlagSource} />;
}
