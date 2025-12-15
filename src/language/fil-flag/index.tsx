import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const FilFlagSource = require('./fil.webp');

export default function FilFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={FilFlagSource} />;
}
