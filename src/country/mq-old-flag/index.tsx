import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MqOldFlagSource = require('./mq-old.webp');

export default function MqOldFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={MqOldFlagSource} />;
}
