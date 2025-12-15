import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const JeFlagSource = require('./je.webp');

export default function JeFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={JeFlagSource} />;
}
