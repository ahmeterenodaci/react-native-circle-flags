import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BqSeFlagSource = require('./bq-se.webp');

export default function BqSeFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={BqSeFlagSource} />;
}
