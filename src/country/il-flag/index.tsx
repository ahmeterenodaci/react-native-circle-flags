import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const IlFlagSource = require('./il.webp');

export default function IlFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={IlFlagSource} />;
}
