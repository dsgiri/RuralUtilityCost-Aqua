export default function GenericPage({ title }: { title: string }) {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">{title}</h1>
      <p className="text-slate-600 mb-4">
        This is a shared page inherited from the Rural Utility Cost master ecosystem.
      </p>
      <p className="text-slate-600">
        Please visit the main <a href="#" className="text-teal-600 hover:underline">ruralutilitycost.com</a> website for the complete and authoritative {title.toLowerCase()} documentation.
      </p>
    </div>
  );
}
