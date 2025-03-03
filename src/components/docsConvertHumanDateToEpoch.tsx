export default function DocsConvertEpochToHumanDate() {
  return (
    <section className="text-base-content mt-12">
      <h2 className="text-2xl text-secondary mb-4">
        Convert from Epoch to Human-Readable Date
      </h2>
      <p className="text-base mb-4">
        Convert an Epoch timestamp into a human-readable date using various
        programming languages. The examples below all show how to convert the
        epoch timestamp `1698402600` (which represents 2023-10-27 10:30:00 UTC).
      </p>
      <div className="overflow-x-auto">
        <table className="table w-full border border-base-300">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th className="p-3 text-left">Language</th>
              <th className="p-3 text-left">Code Example</th>
              <th className="p-3 text-left">Documentation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-base-300">
              <td className="p-3">Bash (Linux/Unix)</td>
              <td className="p-3">
                <code>date -d @1698402600</code>
              </td>
              <td className="p-3">
                <a
                  href="https://man7.org/linux/man-pages/man1/date.1.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  man date
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">C</td>
              <td className="p-3">
                <code>
                  Use localtime() to convert to struct tm, then strftime() to
                  format.
                </code>
              </td>
              <td className="p-3">
                <a
                  href="https://en.cppreference.com/w/c/chrono/localtime"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  C Reference (localtime, strftime)
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">C#</td>
              <td className="p-3">
                <code>
                  DateTimeOffset.FromUnixTimeSeconds(1698402600).UtcDateTime.ToString()
                </code>
              </td>
              <td className="p-3">
                <a
                  href="https://learn.microsoft.com/en-us/dotnet/api/system.datetimeoffset.fromunixtimeseconds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  C# Docs (DateTimeOffset.FromUnixTimeSeconds)
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">C++</td>
              <td className="p-3">
                <code>
                  Use std::localtime() to convert to std::tm, then
                  std::strftime() to format.
                </code>
              </td>
              <td className="p-3">
                <a
                  href="https://en.cppreference.com/w/cpp/chrono/c/localtime"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  C++ Reference (localtime, strftime)
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">ClickHouse</td>
              <td className="p-3">
                <code>SELECT toDateTime(1698402600)</code>
              </td>
              <td className="p-3">
                <a
                  href="https://clickhouse.com/docs/en/sql-reference/functions/date-time-functions/#todatetime"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  ClickHouse Docs
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Dart (Flutter)</td>
              <td className="p-3">
                <code>
                  DateTime.fromMillisecondsSinceEpoch(1698402600 * 1000, isUtc:
                  true)
                </code>
              </td>
              <td className="p-3">
                <a
                  href="https://api.flutter.dev/flutter/dart-core/DateTime-class.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Dart Docs
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Go</td>
              <td className="p-3">
                <code>time.Unix(1698402600, 0).UTC()</code>
              </td>
              <td className="p-3">
                <a
                  href="https://pkg.go.dev/time#Unix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Go Docs (time.Unix)
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Java</td>
              <td className="p-3">
                <code>
                  Instant.ofEpochSecond(1698402600).atZone(ZoneOffset.UTC)
                </code>
              </td>
              <td className="p-3">
                <a
                  href="https://docs.oracle.com/javase/8/docs/api/java/time/Instant.html#ofEpochSecond-long-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Java Docs (Instant.ofEpochSecond)
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">JavaScript</td>
              <td className="p-3">
                <code>new Date(1698402600 * 1000)</code>
              </td>
              <td className="p-3">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  MDN Web Docs (Date)
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Lua</td>
              <td className="p-3">
                <code>{'os.date("%Y-%m-%d %H:%M:%S", 1698402600)'}</code>
              </td>
              <td className="p-3">
                <a
                  href="https://www.lua.org/manual/5.4/manual.html#pdf-os.date"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Lua Docs (os.date)
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">PHP</td>
              <td className="p-3">
                <code>{"date('Y-m-d H:i:s', 1698402600)"}</code>
              </td>
              <td className="p-3">
                <a
                  href="https://www.php.net/manual/en/function.date.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  PHP Docs (date)
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Python</td>
              <td className="p-3">
                <code>datetime.datetime.utcfromtimestamp(1698402600)</code>
              </td>
              <td className="p-3">
                <a
                  href="https://docs.python.org/3/library/datetime.html#datetime.datetime.utcfromtimestamp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Python Docs (datetime.utcfromtimestamp)
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">R</td>
              <td className="p-3">
                <code>
                  {"as.POSIXct(1698402600, origin='1970-01-01', tz='UTC')"}
                </code>
              </td>
              <td className="p-3">
                <a
                  href="https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/as.POSIX*"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  R Docs (as.POSIXct)
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Ruby</td>
              <td className="p-3">
                <code>Time.at(1698402600).utc</code>
              </td>
              <td className="p-3">
                <a
                  href="https://ruby-doc.org/core-3.1.0/Time.html#method-c-at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Ruby Docs (Time.at)
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Rust</td>
              <td className="p-3">
                <code>
                  {" "}
                  Use the chrono crate: NaiveDateTime::from_timestamp_opt().
                </code>
              </td>
              <td className="p-3">
                <a
                  href="https://docs.rs/chrono/latest/chrono/naive/struct.NaiveDateTime.html#method.from_timestamp_opt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Rust Docs (chrono::NaiveDateTime)
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Swift</td>
              <td className="p-3">
                <code>Date(timeIntervalSince1970: 1698402600)</code>
              </td>
              <td className="p-3">
                <a
                  href="https://developer.apple.com/documentation/foundation/date/1779759-init"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Swift Docs (Date)
                </a>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">TypeScript</td>
              <td className="p-3">
                <code>new Date(1698402600 * 1000)</code>
              </td>
              <td className="p-3">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  TypeScript/JavaScript Docs (Date)
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
