import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const It45FlagSource = require('./it-45.webp');

export default function It45Flag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={It45FlagSource} />;
}
