import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BiFlagSource = require('./bi.webp');

export default function BiFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={BiFlagSource} />;
}
