import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GlFlagSource = require('./gl.webp');

export default function GlFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={GlFlagSource} />;
}
