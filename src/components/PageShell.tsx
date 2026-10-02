export function PageShell({
  titulo,
  subtitulo,
  children,
}: {
  titulo: string;
  subtitulo?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">{titulo}</h1>
      {subtitulo && <p className="mt-4 max-w-2xl text-lg text-navy/75">{subtitulo}</p>}
      {children && <div className="mt-10">{children}</div>}
    </section>
  );
}
