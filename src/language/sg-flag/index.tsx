import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SgFlagSource = require('./sg.webp');

export default function SgFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={SgFlagSource} />;
}
