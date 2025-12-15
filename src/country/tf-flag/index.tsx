import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TfFlagSource = require('./tf.webp');

export default function TfFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={TfFlagSource} />;
}
