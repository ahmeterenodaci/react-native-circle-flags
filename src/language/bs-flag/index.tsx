import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BsFlagSource = require('./bs.webp');

export default function BsFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={BsFlagSource} />;
}
