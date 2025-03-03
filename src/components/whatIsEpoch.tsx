export default function WhatIsEpoch() {
  return (
    <section className="text-base-content mt-12">
      <h2 className="text-2xl text-secondary mb-4">What is Epoch?</h2>
      <p className="text-base mb-4">
        The Epoch time is the current time measured in the number of seconds
        since the Unix Epoch. Epoch 0 is January 1, 1970, 00:00:00 GMT (ISO
        8601: 1970-01-01T00:00:00Z). Leap seconds are not used in Unix time.
      </p>
      <div className="overflow-x-auto">
        <table className="table w-full border border-base-300">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th className="p-3 text-left">Normal Time</th>
              <th className="p-3 text-left">Seconds</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-base-300">
              <td className="p-3">1 minute</td>
              <td className="p-3">60 seconds</td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">1 hour</td>
              <td className="p-3">3600 seconds</td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">1 day</td>
              <td className="p-3">86400 seconds</td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">1 week</td>
              <td className="p-3">604800 seconds</td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">1 month (30.44 days)</td>
              <td className="p-3">2629743 seconds</td>
            </tr>
            <tr className="border-t border-base-300">
              <td className="p-3">1 year (365.24 days)</td>
              <td className="p-3">31556926 seconds</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
