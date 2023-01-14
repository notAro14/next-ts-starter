import RootLayout from "src/adapters/primary/react/components/Root.layout";

export default function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html>
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
