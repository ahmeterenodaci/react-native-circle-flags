import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const JollyRogerFlagSource = require('./jolly_roger.webp');

export default function JollyRogerFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={JollyRogerFlagSource} />;
}
