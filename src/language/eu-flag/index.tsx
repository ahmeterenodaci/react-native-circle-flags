import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EuFlagSource = require('./eu.webp');

export default function EuFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EuFlagSource} />;
}
