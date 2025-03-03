export default function ProgrammingWithEpoch() {
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
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-base-300">
              <td className="p-3">Bash (Linux/Unix)</td>
              <td className="p-3">
                <code>date +%s</code>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">ClickHouse</td>
              <td className="p-3">
                <code>SELECT toUnixTimestamp(now());</code>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Dart (Flutter)</td>
              <td className="p-3">
                <code>DateTime.now().millisecondsSinceEpoch ~/ 1000</code>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Firebase Firestore</td>
              <td className="p-3">
                <code>Timestamp.now().seconds</code>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Go</td>
              <td className="p-3">
                <code>time.Now().Unix()</code>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Haskell</td>
              <td className="p-3">
                <code>import Data.Time.Clock.POSIX; getPOSIXTime</code>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Java</td>
              <td className="p-3">
                <code>System.currentTimeMillis() / 1000</code>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">JavaScript</td>
              <td className="p-3">
                <code>Math.floor(Date.now() / 1000)</code>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Lua</td>
              <td className="p-3">
                <code>os.time()</code>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">MySQL</td>
              <td className="p-3">
                <code>SELECT unix_timestamp(now());</code>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Oracle PL/SQL</td>
              <td className="p-3">
                <code>
                  SELECT (SYSDATE - TO_DATE(&apos;01/01/1970 00:00:00&apos;,
                  &apos;MM-DD-YYYY HH24:MI:SS&apos;)) * 24 * 60 * 60 FROM DUAL
                </code>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">PHP</td>
              <td className="p-3">
                <code>time()</code>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">PostgreSQL</td>
              <td className="p-3">
                <code>SELECT extract(epoch FROM now());</code>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">PowerShell</td>
              <td className="p-3">
                <code>[int][double]::Parse((Get-Date -UFormat %s))</code>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Python</td>
              <td className="p-3">
                <code>import time; time.time()</code>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Redis</td>
              <td className="p-3">
                <code>TIME</code>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Ruby</td>
              <td className="p-3">
                <code>Time.now.to_i</code>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Rust</td>
              <td className="p-3">
                <code>
                  SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs()
                </code>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">Scala</td>
              <td className="p-3">
                <code>System.currentTimeMillis() / 1000</code>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">SQL Server</td>
              <td className="p-3">
                <code>
                  SELECT DATEDIFF(s, &apos;1970-01-01 00:00:00&apos;,
                  GETUTCDATE())
                </code>
              </td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">TypeScript</td>
              <td className="p-3">
                <code>Math.floor(Date.now() / 1000)</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
