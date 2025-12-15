import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EhFlagSource = require('./eh.webp');

export default function EhFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EhFlagSource} />;
}
