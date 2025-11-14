function PageSection({ title, subtitle, icon, children }) {
  return (
    <section className="bg-white rounded-2xl shadow-xl p-8 mb-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <div className="flex items-center gap-3">
          {icon && <span className="text-4xl">{icon}</span>}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
            {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
          </div>
        </div>
      </div>
      <div>{children}</div>
    </section>
  )
}

export default PageSection