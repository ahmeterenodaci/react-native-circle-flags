import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const LbFlagSource = require('./lb.webp');

export default function LbFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={LbFlagSource} />;
}
