type ShiftByProps = {
  x?: number;
  y?: number;
  children: React.ReactNode;
};

export default function ShiftBy({
  x = 0,
  y = 0,
  children,
  ...delegated
}: ShiftByProps) {
  return (
    <div
      {...delegated}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      {children}
    </div>
  );
}
