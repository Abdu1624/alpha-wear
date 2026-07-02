interface Props {
  subtitle: string;
  title: string;
}

export default function SectionTitle({
  subtitle,
  title,
}: Props) {
  return (
    <div className="text-center mb-14">
      <p className="uppercase tracking-[8px] text-orange-500 text-sm">
        {subtitle}
      </p>

      <h2 className="text-5xl font-black text-white mt-4">
        {title}
      </h2>
    </div>
  );
}