import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const FrFlagSource = require('./fr.webp');

export default function FrFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={FrFlagSource} />;
}
