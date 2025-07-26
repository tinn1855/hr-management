export function TestPage() {
  console.log('🧪 Test page is rendering!');

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-600">Test Page Works! 🎉</h1>
      <p className="mt-4 text-gray-600">
        If you can see this page, then routing is working correctly.
      </p>
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold">Debug Info:</h2>
        <ul className="mt-2 space-y-1">
          <li>✅ React is working</li>
          <li>✅ Routing is working</li>
          <li>✅ TypeScript is compiling</li>
          <li>✅ Tailwind CSS is working</li>
        </ul>
      </div>
    </div>
  );
}
