export default function DocsProgrammingWithEpoch() {
  return (
    <section className="text-base-content mt-12">
      <h2 className="text-2xl text-secondary mb-4">Programming with Epoch</h2>
      <p className="text-base mb-4">
        The Unix Epoch time can be retrieved in various programming languages
        using built-in functions. Below is a reference for obtaining the current
        Unix timestamp in different environments.
      </p>
      <div className="overflow-x-auto">
        <table className="table w-full border border-base-300">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th className="p-3 text-left">Language</th>
              <th className="p-3 text-left">Command</th>
              <th className="p-3 text-left">Documentation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-base-300">
              <td className="p-3">Bash (Linux/Unix)</td>
              <td className="p-3">
                <code>date +%s</code>
              </td>
              <td className="p-3">
                <a
                  href="https://man7.org/linux/man-pages/man1/date.1.html"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  man date
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">C</td>
              <td className="p-3">
                <code>time(NULL)</code>
              </td>
              <td className="p-3">
                <a
                  href="https://en.cppreference.com/w/c/chrono/time"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  C Reference
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">C#</td>
              <td className="p-3">
                <code>
                  (DateTime.UtcNow - new DateTime(1970, 1, 1)).TotalSeconds
                </code>
              </td>
              <td className="p-3">
                <a
                  href="https://learn.microsoft.com/en-us/dotnet/api/system.datetime.utcnow"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  C# Docs
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">C++</td>
              <td className="p-3">
                <code>std::time(nullptr)</code>
              </td>
              <td className="p-3">
                <a
                  href="https://en.cppreference.com/w/cpp/chrono/c/time"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  C++ Reference
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">ClickHouse</td>
              <td className="p-3">
                <code>SELECT toUnixTimestamp(now());</code>
              </td>
              <td className="p-3">
                <a
                  href="https://clickhouse.com/docs/en/sql-reference/functions/date-time-functions/#tounixtimestamp"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  ClickHouse Docs
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Dart (Flutter)</td>
              <td className="p-3">
                <code>DateTime.now().millisecondsSinceEpoch ~/ 1000</code>
              </td>
              <td className="p-3">
                <a
                  href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Dart Docs
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Firebase Firestore</td>
              <td className="p-3">
                <code>Timestamp.now().seconds</code>
              </td>
              <td className="p-3">
                <a
                  href="https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Firestore Docs
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Go</td>
              <td className="p-3">
                <code>time.Now().Unix()</code>
              </td>
              <td className="p-3">
                <a
                  href="https://pkg.go.dev/time#Now"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Go Docs
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Haskell</td>
              <td className="p-3">
                <code>import Data.Time.Clock.POSIX; getPOSIXTime</code>
              </td>
              <td className="p-3">
                <a
                  href="https://hackage.haskell.org/package/time"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Haskell Docs
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Lua</td>
              <td className="p-3">
                <code>os.time()</code>
              </td>
              <td className="p-3">
                <a
                  href="https://www.lua.org/manual/5.4/manual.html#pdf-os.time"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Lua Docs
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Python</td>
              <td className="p-3">
                <code>import time; time.time()</code>
              </td>
              <td className="p-3">
                <a
                  href="https://docs.python.org/3/library/time.html#time.time"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Python Docs
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">R</td>
              <td className="p-3">
                <code>as.numeric(Sys.time())</code>
              </td>
              <td className="p-3">
                <a
                  href="https://stat.ethz.ch/R-manual/R-devel/library/base/html/Sys.time.html"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  R Docs
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Rust</td>
              <td className="p-3">
                <code>
                  SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs()
                </code>
              </td>
              <td className="p-3">
                <a
                  href="https://doc.rust-lang.org/std/time/struct.SystemTime.html#method.now"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Rust Docs
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Swift</td>
              <td className="p-3">
                <code>Date().timeIntervalSince1970</code>
              </td>
              <td className="p-3">
                <a
                  href="https://developer.apple.com/documentation/foundation/date"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Swift Docs
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">TypeScript</td>
              <td className="p-3">
                <code>Math.floor(Date.now() / 1000)</code>
              </td>
              <td className="p-3">
                <a
                  href="https://www.typescriptlang.org/docs/"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  TypeScript Docs
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
