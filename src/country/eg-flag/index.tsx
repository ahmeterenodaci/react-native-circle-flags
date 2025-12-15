import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EgFlagSource = require('./eg.webp');

export default function EgFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EgFlagSource} />;
}
