export default function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 text-center">
      <div className="container mx-auto">
        <p className="text-lg font-semibold">Timestamp Converter</p>
        <p className="text-sm opacity-75">
          Convert and manage timestamps with ease.
        </p>
        <p className="text-sm opacity-50 mt-2">
          © {new Date().getFullYear()} timestamp-converter.online - All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
