import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AiFlagSource = require('./ai.webp');

export default function AiFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={AiFlagSource} />;
}
