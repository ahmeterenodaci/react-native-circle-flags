import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MniFlagSource = require('./mni.webp');

export default function MniFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={MniFlagSource} />;
}
