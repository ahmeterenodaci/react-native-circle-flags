import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MqFlagSource = require('./mq.webp');

export default function MqFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={MqFlagSource} />;
}
