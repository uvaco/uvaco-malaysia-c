interface PulseDotProps {
  className?: string;
}

export default function PulseDot({ className = '' }: PulseDotProps) {
  return <span className={`pulse-dot ${className}`} />;
}
